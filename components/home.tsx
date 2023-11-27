import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { getUserDetails } from "@/app/api/user-details";
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
import { FrequentUserBadges } from "./user-badges";
import { SearchBar } from "./search-bar";

export default async function Home() {
  const { data } = await supabase
    .from("searches")
    .select("username, count")
    .order("count", { ascending: false })
    .limit(5);

  const frequentUsernames = data?.map((user) => user.username) || [];

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

          <SearchBar />

          <div className="frequents flex flex-col items-center justify-center gap-5">
            Checkout our most frequent searches:
            <FrequentUserBadges frequentUsernames={frequentUsernames} />
          </div>
        </div>
      </section>
    </Container>
  );
}
