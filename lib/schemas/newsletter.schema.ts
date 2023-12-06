import * as z from "zod";

const newsletterFormSchema = z.object({
  email: z.string().email(),
});

export default newsletterFormSchema;
