"use server"

import { Resend } from "resend";
import { z } from "zod";
import { phoneNumberSchema } from "@/lib/schemas";

// Form validation schema
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    phone: phoneNumberSchema,
    plan: z.string(),
});

export type GetStartedFormData = z.infer<typeof formSchema>;

export async function submitGetStartedForm(data: GetStartedFormData) {
    if (!process.env.RESEND_API_KEY) {
        throw new Error("RESEND_API_KEY is not defined in environment variables");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        // Validate the form data
        const validatedData = formSchema.parse(data);

        // Send email using Resend
        const emailResponse = await resend.emails.send({
            from: "Go Signal Team <contact@gosignal.com.au>",
            to: ["matty.j.lord@gmail.com"], // Replace with your email
            subject: `New Get Started Form Submission - ${validatedData.plan} Plan`,
            html: `
                <h2>New Get Started Form Submission</h2>
                <p><strong>Name:</strong> ${validatedData.name}</p>
                <p><strong>Email:</strong> ${validatedData.email}</p>
                <p><strong>Phone:</strong> ${validatedData.phone}</p>
                <p><strong>Selected Plan:</strong> ${validatedData.plan}</p>
            `,
        });

        if (emailResponse.error) {
            throw new Error("Failed to send email");
        }

        return { success: true };
    } catch (error) {
        console.error("Get started form submission error:", error);
        return { success: false, error: "Failed to submit form" };
    }
} 