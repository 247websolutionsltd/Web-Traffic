// schemas/signUpSchema.ts
import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(2, "Name is too short"),
  // email: z.string().email("Enter a valid email"),
  password: z
    .string()
    .min(8, "At least 8 characters")
    .regex(/[0-9]/, "Must include a number"),
  confirmPassword: z.string(),
  phone: z
    .string()
    .regex(/^\+?(0|\+)\d{7,14}$/, "Enter a valid phone number"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;