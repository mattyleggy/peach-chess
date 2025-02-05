"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
    type: z.enum(["phone", "email", "address"]),
    value: z.string(),
});

export async function submitFooterContact(contactData: z.infer<typeof contactSchema>) {
    if (!process.env.RESEND_API_KEY) {
        throw new Error("RESEND_API_KEY is not defined in environment variables");
    }

    const validatedData = contactSchema.safeParse(contactData);
    if (!validatedData.success) {
        return { success: false, error: "Invalid contact data" };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const emailResponse = await resend.emails.send({
            from: "Go Signal Team <contact@gosignal.com.au>",
            to: ["matty.j.lord@gmail.com"], // Replace with your email
            subject: `New Contact Request from Footer`,
            html: `
                <h2>New Contact Request</h2>
                <p><strong>Contact Type:</strong> ${contactData.type}</p>
                <p><strong>Value:</strong> ${contactData.value}</p>
                <p>This contact request was initiated from the footer contact section.</p>
            `,
        });

        if (emailResponse.error) {
            throw new Error("Failed to send email");
        }

        return { success: true };
    } catch (error) {
        console.error("Footer contact submission error:", error);
        return { success: false, error: "Failed to submit contact request" };
    }
}
