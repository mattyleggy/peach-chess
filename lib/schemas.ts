import * as z from "zod";

export const phoneNumberSchema = z
    .string()
    .transform((val) => val.replace(/\D/g, ""))
    .pipe(z.string().regex(/^0[0-9]{9}$/, "Invalid Australian phone number"));
