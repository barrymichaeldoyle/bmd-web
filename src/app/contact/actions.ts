"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

export interface FormState {
  success?: boolean;
  message?: string | null;
  fieldErrors?: Record<string, string>;
}

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_EMAIL_ADDRESS,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const schema = z.object({
  name: z.string().min(3, "Please enter at least 3 characters for your name."),
  email: z.string().email("Please enter a valid email address."),
  message: z
    .string()
    .min(10, "Your message should be at least 10 characters long."),
});

export async function submit(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const { email, message, name } = schema.parse({
      email: formData.get("email"),
      name: formData.get("name"),
      message: formData.get("message"),
    });

    const mailOptions = {
      from: process.env.GMAIL_EMAIL_ADDRESS,
      to: process.env.GMAIL_EMAIL_ADDRESS,
      subject: "New Contact Form Submission from BMD Website",
      text: `You've received a new message from ${name} (${email}):\n\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.info("Email sent successfully");
      return { success: true };
    } catch (error) {
      return { message: "Failed to send message" };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation error: ", error.errors);

      const fieldErrors = error.errors.reduce(
        (acc: { [key: string]: string }, currError) => {
          acc[currError.path[0]] = currError.message;
          return acc;
        },
        {},
      );

      return { fieldErrors };
    }
    console.error("Unexpected error: ", error);
    return { message: "An unexpected error occurred." };
  }
}
