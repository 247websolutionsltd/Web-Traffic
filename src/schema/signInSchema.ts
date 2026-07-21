// schemas/signUpSchema.ts
import { z } from "zod";

export const signInSchema = z.object({
  password: z
    .string()
    .min(8, "At least 8 characters")
    .regex(/[0-9]/, "Must include a number"),
  phone: z
    .string()
    .regex(/^\+?(0|\+)\d{7,14}$/, "Enter a valid phone number"),
});

export type SignInFormValues = z.infer<typeof signInSchema>;