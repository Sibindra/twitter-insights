"use client";
import TweetGraphCard from "@/components/cards/tweet-graph.card";
import { useAppSelector } from "@/store/store";

export default function Dashboard() {
  const username = useAppSelector((state) => state.usernameReducer.username);

  return (
    <>
      <div className="flex  flex-col p-10 border border-black bg-white gap-10">
        <div className="flex gap-3  border border-black">
          <div className="border border-black">1-graph</div>

          <div className="border border-black">2-graph</div>

          <div className="border border-black">3-graph</div>
        </div>
        <div className="flex gap-3 border border-black ">
          <TweetGraphCard username={username} reply={false} limit={1} />
        </div>
      </div>
    </>
  );
}
