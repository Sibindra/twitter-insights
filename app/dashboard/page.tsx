"use client";

import FavCountGraph from "@/components/cards/graph/fav.count.linegraph.card";
import TrendingHashtagCard from "@/components/cards/trending-hastag.card";
import TweetAreaGraphCard from "@/components/cards/graph/tweet.areagraph.card";
import TweetGraphCard from "@/components/cards/graph/tweet.linegraph.card";
import { useAppSelector } from "@/store/store";
import FavCountAreaGraph from "@/components/cards/graph/fav.count.areagraph";
import TweetBarGraphCard from "@/components/cards/graph/tweet.bargraph.card";

export default function Dashboard() {
  const username = useAppSelector((state) => state.username.username);

  return (
    <>
      {/* <TweetAreaGraphCard username={username} reply={false} limit={1} /> */}
      {/* <TrendingHashtagCard woeid={1}/> */}
      {/* <CountGraphCard username={username} reply={false} limit={1}/> */}
      {/* <FavCountGraph username={username} reply={false} limit={1}/> */}
      {/* <FavCountAreaGraph username={username} reply={false} limit={1}/> */}
      <TweetBarGraphCard username={username} reply={false} limit={1}/>

    </>
  );
}
