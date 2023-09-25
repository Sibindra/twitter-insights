"use client";

import RepliesCard from "@/components/cards/replies.card";
import TweetGraphCard from "@/components/cards/tweet-graph.card";
import { useAppSelector } from "@/store/store";

export default function Dashboard() {
  const username = useAppSelector((state) => state.username.username);

  return (
    <>
      {/* <TweetGraphCard username={username} reply={false} limit={1} /> */}
      <RepliesCard username={username} reply={true} limit={2}/>
    </>
  );
}
