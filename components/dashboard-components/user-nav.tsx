"use client ";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { getUserDetails } from "@/lib/fetches/user-details";
import usernameFormSchema from "@/lib/schemas/home.schema";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { sendSearchToSupabase } from "@/components/home";
import { LocalStore } from "@/store/local-store";

export function UserNav() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      username: "",
    },
  });

  const handleSearchOnDashboard = async (
    values: z.infer<typeof usernameFormSchema>
  ) => {
    const username = values.username;

    LocalStore.setUsername(username);
    setIsLoading(true);

    router.push("/dashboard");

    sendSearchToSupabase(username);
    setIsLoading(false);
  };

  const mutation = useMutation((username: string) => getUserDetails(username));

  async function onSubmit(values: z.infer<typeof usernameFormSchema>) {
    setIsLoading(true);
    const response = await mutation.mutateAsync(form.getValues("username"));

    if (response.detail) {
      // INVALID CASE
      form.setError("username", {
        type: "manual",
        message: "No account of such username exists.",
      });
    } else {
      // VALID CASE
      handleSearchOnDashboard(values);
    }

    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="md:flex gap-2 items-center w-96 hidden">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full relative">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="enter username without @"
                    className="p-4"
                    {...field}
                  />
                </FormControl>
                <FormMessage className=" absolute" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isLoading}
            className="border border-black"
          >
            Search
          </Button>
        </div>
      </form>
    </Form>
  );
}
