import * as z from "zod";

const usernameFormSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username must not be empty" })
    .max(15, { message: "Username must not exceed 15 characters" })
    .refine((username) => /^[A-Za-z0-9_]+$/.test(username), {
      message: "Username must only contain letters, numbers, and underscores",
    }),
});

export default usernameFormSchema;
