"use server"

import { Resend } from "resend";
import { z } from "zod";

// Form validation schema
const EnquirySchema = z.object({
    name: z.string().min(1, "Name is required"),
    phone: z.string().min(1, "Contact Number is required"),
    email: z.string().email("Invalid email address"),
    lessonType: z.string().min(1, "Lesson Type is required"),
    message: z.string().optional(),
});

export type EnquiryFormData = z.infer<typeof EnquirySchema>;

export async function submitEnquiry(data: EnquiryFormData) {
    if (!process.env.RESEND_API_KEY) {
        throw new Error("RESEND_API_KEY is not defined in environment variables");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        // Validate the form data
        const validatedData = EnquirySchema.parse(data);

        // Get the readable lesson type name
        const lessonTypeMap: Record<string, string> = {
            "group-beginner": "Group - Beginner",
            "group-intermediate": "Group - Intermediate",
            "group-advanced": "Group - Advanced",
            "private-beginner": "Private Lesson - Beginner",
            "private-intermediate": "Private Lesson - Intermediate",
            "private-advanced": "Private Lesson - Advanced"
        };

        const readableLessonType = lessonTypeMap[validatedData.lessonType] || validatedData.lessonType;

        // Send email using Resend
        const emailResponse = await resend.emails.send({
            from: "Peach Chess <noreply@gosignal.com.au>", // Update with your actual from address
            to: ["ben@peachchess.com.au"], // Replace with your email
            bcc: ["matty.j.lord@gmail.com"], // Replace with your email
            subject: `New Chess Lesson Enquiry - ${readableLessonType}`,
            html: `
                <h2>New Chess Lesson Enquiry</h2>
                <p><strong>Name:</strong> ${validatedData.name}</p>
                <p><strong>Email:</strong> ${validatedData.email}</p>
                <p><strong>Phone:</strong> ${validatedData.phone}</p>
                <p><strong>Lesson Type:</strong> ${readableLessonType}</p>
                ${validatedData.message ? `<p><strong>Message:</strong> ${validatedData.message}</p>` : ''}
            `,
        });

        if (emailResponse.error) {
            throw new Error("Failed to send email");
        }

        return { success: true };
    } catch (error) {
        console.error("Enquiry submission error:", error);
        return { success: false, error: "Failed to submit enquiry" };
    }
} 