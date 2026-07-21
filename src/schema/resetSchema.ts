// schemas/signUpSchema.ts
import { z } from "zod";

export const resetSchema = z.object({
  phone: z
    .string()
    .regex(/^\+?(0|\+)\d{7,14}$/, "Enter a valid phone number"),
});

export type ResetFormValues = z.infer<typeof resetSchema>;