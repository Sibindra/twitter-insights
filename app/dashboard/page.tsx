"use client"
import TweetGraphCard from "@/components/cards/tweet-graph.card";
import { useAppSelector } from "@/store/store";

export default function Dashboard() {

  const username = useAppSelector((state)=>state.usernameReducer.username);

  return (
    <>
      <TweetGraphCard username={username} reply={false} limit={4}/>
    </>
  );
}
