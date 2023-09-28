"use client";

import FavCountGraph from "@/components/cards/fav-count.linegraph";
import TrendingHashtagCard from "@/components/cards/trending-hastag.card";
import TweetGraphCard from "@/components/cards/tweet-graph.card";
import { useAppSelector } from "@/store/store";

export default function Dashboard() {
  const username = useAppSelector((state) => state.username.username);

  return (
    <>
      {/* <TweetGraphCard username={username} reply={false} limit={1} /> */}
      {/* <TrendingHashtagCard woeid={1}/> */}
      {/* <CountGraphCard username={username} reply={false} limit={1}/> */}
      <FavCountGraph username={username} reply={false} limit={1}/>
    </>
  );
}
