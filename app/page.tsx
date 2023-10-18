"use client";

import Features from "@/components/features";
import Home from "@/components/home";

const frequestUsernames = ["@elonmusk", "@iamsrk", "@brb1914", "@imVkohli" , "@ESPNFC"];

export default function Main() {
  return (
    <main>
      <Home frequestUsernames={frequestUsernames} />
      <Features/>
    </main>
  );
}
