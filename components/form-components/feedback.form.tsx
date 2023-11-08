"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import profileFormSchema from "@/lib/schemas/feedback.schema";
import { supabase } from "@/lib/database/supabase";
import { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function FeedbackForm() {
  const [sendSucess, setSendSucess] = useState(false);

  const { toast } = useToast();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  });

  // send data into supabase server database
  const sendData = async (data: ProfileFormValues) => {
    try {
      const { status, error } = await supabase
        .from("feedbacks")
        .insert([{ ...data }]);

      if (status === 201) {
        setSendSucess(true);
      } else {
        setSendSucess(false);
      }

      if (error) {
        throw error;
      }

      toggleToast("");
    } catch (error) {
      toggleToast((error as any).message);
    }
  };

  const toggleToast = (error: string) => {
    sendSucess
      ? toast({
          variant: "default",
          title: "Great",
          description: "Your feedback has been sent successfully",
        })
      : toast({
          variant: "destructive",
          title: "Error",
          description: `Something went wrong : ${error}`,
        });
  };

  function onSubmit(data: ProfileFormValues) {
    sendData(data);

    form.reset({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8  m-3 p-5"
      >
        <h3 className="mb-4 text-lg font-medium">Contact Us</h3>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="your name" {...field} />
              </FormControl>
              <FormDescription>please let us know who you are</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your email" {...field} />
              </FormControl>
              <FormDescription>
                please enter your email address{" "}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Give us some message about your experience with us"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="py-3 px-5 w-full text-sm font-medium border cursor-pointer  border-black rounded-none "
        >
          Submit{" "}
        </Button>
      </form>
    </Form>
  );
}
