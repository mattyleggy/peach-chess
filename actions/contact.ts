"use server"
import { Resend } from "resend";
import { z } from "zod";
import { phoneNumberSchema } from "@/lib/schemas";

// Form validation schema
const formSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    contactNumber: phoneNumberSchema,
    message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof formSchema>;

export async function submitContactForm(data: ContactFormData) {
    // return { success: true }; // for testing

    console.log(process.env.RESEND_API_KEY);
    if (!process.env.RESEND_API_KEY) {
        throw new Error("RESEND_API_KEY is not defined in environment variables");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        // Validate the form data
        const validatedData = formSchema.parse(data);

        // Send email using Resend
        const emailResponse = await resend.emails.send({
            from: "Peach Chess <noreply@gosignal.com.au>",
            to: ["benjaminrpeach@gmail.com"], // Replace with your email
            bcc: ["matty.j.lord@gmail.com"],
            subject: `New Contact Form Submission`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Full Name:</strong> ${validatedData.fullName}</p>
                <p><strong>Email:</strong> ${validatedData.email}</p>
                <p><strong>Contact Number:</strong> ${validatedData.contactNumber}</p>
                ${
                    validatedData.message
                        ? `<p><strong>Message:</strong> ${validatedData.message}</p>`
                        : ""
                }
            `,
        });

        if (emailResponse.error) {
            throw new Error("Failed to send email");
        }

        return { success: true };
    } catch (error) {
        console.error("Contact form submission error:", error);
        return { success: false, error: "Failed to submit contact form" };
    }
}
