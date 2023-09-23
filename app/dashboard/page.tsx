"use client"
import TweetGraphCard from "@/components/cards/tweet-graph.card";
import { useSearchParams } from "next/navigation";

export default function Dashboard() {
  const searchedUsername = useSearchParams().get("username");

  return (
    <>
      <TweetGraphCard username={searchedUsername as string} reply={false} limit={2} />
    </>
  );
}
