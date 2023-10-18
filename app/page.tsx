"use client";

import Contact from "@/components/contact";
import Features from "@/components/features";
import Home from "@/components/home";
import Team from "@/components/team";
import Footer from "@/components/footer";
import Working from "@/components/working";

const frequestUsernames = ["@elonmusk", "@iamsrk", "@brb1914", "@imVkohli" , "@ESPNFC"];

export default function Main() {
  return (
    <main>
      <Home frequestUsernames={frequestUsernames} />
      <Features/>
      <Team/>
      <Working/>
      <Contact/>
      <Footer/>
    </main>
  );
}
