"use client";

import SentimentAnalysisCard from "@/components/cards/graph/sentiment.graphcard";
import { useAppSelector } from "@/store/store";

export default function Dashboard() {
  // controllers
  const username = useAppSelector((state) => state.username.username);

  return <><SentimentAnalysisCard input={["I am fine","this is hell","rubbish","whatever"]}/></>;

  
}
