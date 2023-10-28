"use client";

import { useState } from "react";
import { MdEmail } from "react-icons/md";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import subscribeFormSchema from "@/lib/schemas/subscribe.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { supabase } from "@/lib/database/supabase";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const [emailSentStatus, setEmailSentStatus] = useState<boolean>(false);
  const [displayMessage, setDisplayMessage] = useState<string>("");

  const form = useForm<z.infer<typeof subscribeFormSchema>>({
    resolver: zodResolver(subscribeFormSchema),
  });

  // form submit handler
  async function onSubmit(values: z.infer<typeof subscribeFormSchema>) {
    try {
      const { error, status } = await supabase
        .from("subscribers")
        .insert(values);

      if (error) {
        throw error;
      }

      if (status === 201) {
        setEmailSentStatus(true);
        setDisplayMessage("Thank you for subscribing to our newsletter!");
      }
    } catch (error) {
      console.log(error);
      setEmailSentStatus(false);
      setDisplayMessage(
        `Error occured while subscribing to our newsletter: ${
          (error as any).message
        }}`
      );
    }

    toast({
      title: emailSentStatus ? "Success" : "Error",
      variant: emailSentStatus ? "default" : "destructive",
      description: displayMessage,
    });
  }

  const onClickHandleError = () => {
    form.formState.isValid
      ? null
      : toast({
          variant: "destructive",
          title: "Error",
          description: "Please enter a valid email address",
        });
  };

  return (
    <Container className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold sm:text-4xl">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-stone-500 md:mb-12 sm:text-xl">
            Stay up to date with the features, announcements, and exclusive
            insights. Feel free to sign up with your email.
          </p>

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
                    onClick={onClickHandleError}
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </form>
          </Form>

          <div className="mx-auto max-w-screen-sm text-sm text-left text-stone-500 newsletter-form-footer">
            We care about the protection of your data.{" "}
            <a
              href="#"
              className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
            >
              Read our Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
    </Container>
  );
}
