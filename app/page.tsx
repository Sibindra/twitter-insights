"use client";

import Container from "@/components/container";
import Home from "@/components/home";

const frequestUsernames = ["@elonmusk", "@iamsrk", "@brb1914", "@imVkohli"];

export default function Main() {
  return (
    <Container>
      <Home frequestUsernames={frequestUsernames} />
    </Container>
  );
}
