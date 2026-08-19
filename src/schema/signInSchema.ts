// schemas/signUpSchema.ts
import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z
    .string()
    .min(8, "At least 8 characters")
    .regex(/[0-9]/, "Must include a number"),
});

export type SignInFormValues = z.infer<typeof signInSchema>;