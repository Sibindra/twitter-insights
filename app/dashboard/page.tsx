"use client";

import SentimentAnalysisCard from "@/components/cards/sentiment-test.card";
import { useAppSelector } from "@/store/store";

export default function Dashboard() {
  const username = useAppSelector((state) => state.username.username);

  return (
    <>
      <SentimentAnalysisCard input={["bad work" , "good work"]} />
    </>
  );
}
