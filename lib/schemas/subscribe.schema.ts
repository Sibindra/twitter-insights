import * as z from "zod";

const subscribeFormSchema = z.object({
  email: z.string().email(),
});

export default subscribeFormSchema;
