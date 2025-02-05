"use server"

import { Resend } from "resend";
import { z } from "zod";
import { phoneNumberSchema } from "@/lib/schemas";

const callbackSchema = z.object({
  contactNumber: phoneNumberSchema,
});

export type CallbackFormData = z.infer<typeof callbackSchema>;

export async function submitCallbackForm(data: CallbackFormData) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not defined in environment variables");
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const validatedData = callbackSchema.parse(data);

    const emailResponse = await resend.emails.send({
      from: "Go Signal Team <contact@gosignal.com.au>",
      to: ["matty.j.lord@gmail.com"], // Replace with your email
      subject: "New Callback Request",
      html: `
        <h2>New Callback Request</h2>
        <p><strong>Contact Number:</strong> ${validatedData.contactNumber}</p>
      `,
    });

    if (emailResponse.error) {
      throw new Error("Failed to send email");
    }

    return { success: true };
  } catch (error) {
    console.error("Callback request error:", error);
    return { success: false, error: "Failed to submit callback request" };
  }
} 