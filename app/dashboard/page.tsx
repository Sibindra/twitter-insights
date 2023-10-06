"use client";

import SentimentAnalysisCard from "@/components/cards/sentiment.card";
import { useAppSelector } from "@/store/store";

export default function Dashboard() {
  // controllers
  const username = useAppSelector((state) => state.username.username);

  return <>
  
  <SentimentAnalysisCard input={['hello how are you ', 'i am fine' , 'what about you ']}/>
  </>;
}
