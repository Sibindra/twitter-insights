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
      <div className="flex  flex-col p-10 border border-black bg-white gap-10">
        <div className="flex gap-3  border border-black p-5">
          <div className="flex flex-1 border border-black">
            <FavCountAreaGraph username={username} reply={false} limit={1}/>
          </div>

          <div className="flex flex-1 border border-black">
            <FavCountGraph username={username} reply={false} limit={1}/>
          </div>

          <div className="flex flex-1 border border-black">
            <TweetBarGraphCard username={username} reply={false} limit={1}/>
          </div>
        </div>

        <div className="flex gap-3 border border-black bg-slate-100">
          <TweetGraphCard username={username} reply={false} limit={1} />
        </div>

        <div className="flex gap-3  border border-black p-5">
          <div className="flex flex-1 border border-black">graph-5</div>
          <div className="flex flex-1 border border-black">graph-6</div>
        </div>
      </div>
    </>
  );
}
