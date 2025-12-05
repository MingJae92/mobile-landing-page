// schemas/contactSchema.ts
import { z } from "zod";

export const contactDetailsSchema = z.object({
  mobile: z
    .string()
    .min(10, "Mobile number too short")
    .max(15, "Mobile number too long")
    .regex(/^[0-9]+$/, "Mobile must contain digits only"),
  email: z.string().email("Enter a valid email"),
});
