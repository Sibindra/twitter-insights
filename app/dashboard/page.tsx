"use client";

import RepliesCard from "@/components/cards/replies.card";
import TrendingHashtagCard from "@/components/cards/trending-hastag.card";
import TweetGraphCard from "@/components/cards/tweet-graph.card";
import { useAppSelector } from "@/store/store";

export default function Dashboard() {
  const username = useAppSelector((state) => state.username.username);

  return (
    <>
      {/* <TweetGraphCard username={username} reply={false} limit={1} /> */}
      {/* NEPAL: 2269179 */}
      <TrendingHashtagCard woeid={2295377}/>
    </>
  );
}
