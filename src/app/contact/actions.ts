"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(10),
});

export default async function submit(formData: FormData) {
  const { email, message, name } = schema.parse({
    email: formData.get("email"),
    name: formData.get("name"),
    message: formData.get("message"),
  });

  console.log({ email, message, name });
}
