'use client'

import { sendSearchToSupabase } from "@/app/api/[supabase]/supabase";
import { getUserDetails } from "@/app/api/user-details";
import usernameFormSchema from "@/lib/schemas/home.schema";
import { LocalStore } from "@/store/local-store";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const SearchBar = () => {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      username: "",
    },
  });

  const handleSearch = async (values: z.infer<typeof usernameFormSchema>) => {
    const username = values.username;

    // LocalStore.setUsername(username);

    router.push(`/dashboard/${username}`);

    sendSearchToSupabase(username);
  };

  const mutation = useMutation((username: string) => getUserDetails(username));

  async function onSubmit(values: z.infer<typeof usernameFormSchema>) {
    const response = await mutation.mutateAsync(form.getValues("username"));

    if (response?.detail) {
      form.setError("username", {
        type: "manual",
        message: "No account of such username exists.",
      });
    } else {
      handleSearch(values);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="center flex justify-center w-full p-4 gap-5">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="enter username without @"
                    className="p-4"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="border border-black">
            Search
          </Button>
        </div>
      </form>
    </Form>
  );
};
