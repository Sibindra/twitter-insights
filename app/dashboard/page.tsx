"use client";

import FavCountGraph from "@/components/cards/graph/fav.count.linegraph.card";
import TrendingHashtagCard from "@/components/cards/trending-hastag.card";
import TweetAreaGraphCard from "@/components/cards/graph/tweet.areagraph.card";
import TweetGraphCard from "@/components/cards/graph/tweet.linegraph.card";
import { useAppSelector } from "@/store/store";
import FavCountAreaGraph from "@/components/cards/graph/fav.count.areagraph";
import TweetBarGraphCard from "@/components/cards/graph/tweet.bargraph.card";
import FavCountBarGraph from "@/components/cards/graph/fav.count.bargraph";
import TrendingGraphCard from "@/components/cards/graph/trending.hashtag.linegraph";
import TrendingAreaGraphCard from "@/components/cards/graph/trending.hashtag.areagraph";

export default function Dashboard() {
  const username = useAppSelector((state) => state.username.username);

  return (
    <>
      <div className="flex  flex-col p-10 border border-black bg-white gap-10">
        <div className="flex gap-3  border border-black p-5">
          <div className="flex flex-1 border border-black">
            graph 1
            {/* <FavCountAreaGraph username={username} reply={false} limit={0}/> */}
          </div>

          <div className="flex flex-1 border border-black">
            {/* <FavCountGraph username={username} reply={false} limit={0}/> */}
            graph 2
          </div>

          <div className="flex flex-1 border border-black">
            {/* <TweetBarGraphCard username={username} reply={false} limit={0}/> */}
            graph 3
          </div>
        </div>

        <div className="flex gap-3 border border-black bg-slate-100">
          {/* <TweetGraphCard username={username} reply={false} limit={0} /> */}
          graph 4
        </div>

        <div className="flex gap-3  border border-black p-5">
          <div className="flex flex-1 border border-black">
            {/* <TweetAreaGraphCard username={username} reply={false} limit={0}/> */}
            graph 5
          </div>
          <div className="flex flex-1 border border-black">
            {/* <FavCountBarGraph username={username} reply={false} limit={0}/> */}
            graph 6
          </div>
        </div>
      </div>
      {/* <TrendingGraphCard woeid={4118}/> */}
      {/* <TrendingHashtagCard woeid={4118}/> */}
      <TrendingAreaGraphCard woeid={4118}/>
    </>
  );
}
