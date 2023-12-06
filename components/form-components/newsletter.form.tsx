"use client";

import { useForm } from "react-hook-form";
import subscribeFormSchema from "@/lib/schemas/newsletter.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdEmail } from "react-icons/md";
import { toast } from "@/components/ui/use-toast";

export default function NewsLetterForm() {
  const form = useForm<z.infer<typeof subscribeFormSchema>>({
    resolver: zodResolver(subscribeFormSchema),
  });

  function onSubmit(values: z.infer<typeof subscribeFormSchema>) {
    

    form.reset({
      email: "",
    });

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })

    // try {
    //   const { error, status } = await supabase
    //     .from("subscribers")
    //     .insert(values);

    //   if (error) {
    //     throw error;
    //   }

    //   if (status === 201) {
    //     setEmailSentStatus(true);
    //     setDisplayMessage("Thank you for subscribing to our newsletter!");
    //   }
    // } catch (error) {
    //   console.log(error);
    //   setEmailSentStatus(false);
    //   setDisplayMessage(
    //     `Error occured while subscribing to our newsletter: ${
    //       (error as any).message
    //     }}`
    //   );
    // }

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
          <div className="relative w-full">
            <label
              htmlFor="email"
              className="hidden mb-2 text-sm font-medium text-stone-900 "
            >
              Email address
            </label>
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <MdEmail className="w-5 h-5 text-stone-500 dark:text-stone-400" />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email Address "
                      {...field}
                      className=" pl-10"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
            <Button
              type="submit"
              className=" md:mx-5 w-full"
              disabled={form.formState.isSubmitting}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
