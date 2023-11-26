"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { getUserDetails } from "@/lib/fetches/user-details";
import usernameFormSchema from "@/lib/schemas/home.schema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Container from "@/components/container";
import ModeToggle from "@/components/ui/toggle-theme";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import * as z from "zod";
import { supabase } from "@/app/api/[supabase]/supabase";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { LocalStore } from "@/store/local-store";

export const sendSearchToSupabase = async (username: string) => {
  const { data: existingUser } = await supabase
    .from("searches ")
    .select("*")
    .eq("username", username);

  if (existingUser?.length === 0) {
    const { data: newUser, error } = await supabase
      .from("searches")
      .insert([{ username }]);
  } else {
    const { error: updateError } = await supabase
      .from("searches")
      .update({ count: (existingUser as any)[0].count + 1 })
      .eq("username", username);
  }
};

const sendLinksToSupabase = async (username: string) => {
  const { data: existingUser } = await supabase
    .from("searches")
    .select("*")
    .eq("username", username);

  if ((existingUser as any)?.length > 0) {
    const { error: updateError } = await supabase
      .from("searches")
      .update({ count: (existingUser as any)[0].count + 1 })
      .eq("username", username);
  }
};

export default function Home({
  frequestUsernames,
}: {
  frequestUsernames: string[];
}) {
  const [isLoading, setIsLoading] = useState(false);
  // const dispatch = useDispatch();
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      username: "",
    },
  });

  const handleSearch = async (values: z.infer<typeof usernameFormSchema>) => {
    const username = values.username;

    
    LocalStore.setUsername(username);
    setIsLoading(true);

    router.push(`/dashboard`);

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
      handleSearch(values);
    }

    setIsLoading(false);
  }

  return (
    <Container className="">
      <nav className="flex justify-end items-center">
        <ModeToggle />
      </nav>

      <section className="h-screen flex items-center justify-center">
        <div className="w-full flex items-center justify-center flex-col gap-10">
          <div className="flex flex-col gap-3 text-center">
            <h1 className="text-6xl font-extrabold">Insights</h1>
            <p>unveil patterns through data visualizations ....</p>
          </div>

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

          <div className="frequents flex flex-col items-center justify-center gap-5">
            Checkout our most frequent searches:
            <div className="flex gap-3 justify-center flex-wrap">
              {frequestUsernames.map((username, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  onClick={() => {
                    sendLinksToSupabase(username);
                    // dispatch(setUsernameSlice(username));
                    LocalStore.setUsername(username);
                    router.push(`/dashboard`);
                  }}
                  className="rounded-sm cursor-pointer hover:bg-secondary hover:text-secondary-foreground"
                >
                  @{username}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
