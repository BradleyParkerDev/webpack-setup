import { z } from "zod";

// Define the Zod schema
export const userSchema = z.object({
    userName: z.string().min(3, "Username must be at least 3 characters"),
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    emailAddress: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmedPassword: z.string(),
}).refine((data) => data.password === data.confirmedPassword, {
    message: "Passwords must match",
    path: ["confirmedPassword"],
});

// Infer the TypeScript type from Zod schema
export type User = z.infer<typeof userSchema>;
