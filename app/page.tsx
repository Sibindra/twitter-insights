"use client";
import Contact from "@/components/contact";
import Features from "@/components/features";
import Home from "@/components/home";
import Team from "@/components/team";
import Footer from "@/components/footer";
import Working from "@/components/working";
import { useFrequentUsernames } from "@/lib/database/frequent-usernames";

export default function Main() {
  const frequentUsernames = useFrequentUsernames();

  return (
    <main>
      <Home frequestUsernames={frequentUsernames} />
      <Features />
      <Team />
      <Working />
      <Contact />
      <Footer />
    </main>
  );
}
