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

// -----------------------------
// PERSONAL DETAILS SCHEMA
// -----------------------------


export const personalDetailsSchema = z.object({
  title: z.string().min(1, "Title is required"),
  firstName: z.string().min(1, "First name is required"),
  surname: z.string().min(1, "Surname is required"),
  dobDay: z.string().regex(/^(0?[1-9]|[12][0-9]|3[01])$/, "Enter a valid day (1–31)"),
  dobMonth: z.string().regex(/^(0?[1-9]|1[0-2])$/, "Enter a valid month (1–12)"),
  dobYear: z.string().regex(/^\d{4}$/, "Enter a valid year (YYYY)"),
});
