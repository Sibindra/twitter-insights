"use client";

import LikeRetweetPieChart from "@/components/cards/graph/likes.retweets.piechart";
import TweetAreaGraphCard from "@/components/cards/graph/tweet.areagraph.card";
import SentimentAnalysisCard from "@/components/cards/sentiment.card";
import getTweets from "@/lib/tweets";
import { useAppSelector } from "@/store/store";
import { useQuery } from "@tanstack/react-query";

export default function Dashboard() {
  // controllers
  const username = useAppSelector((state) => state.username.username);

  const { data: tweetData, status: tweetStatus } = useQuery({
    queryKey: ["tweets", username],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 10000));
      return await getTweets({ username: username, limit: 3, reply: true });
    },
  });

  return (
    <>
      {/* {
    tweetData &&

    <TweetAreaGraphCard width={600} height={500} data={tweetData} className={'border m-5'}/>

  } */}

      {/* <SentimentAnalysisCard
        input={["text ", "ma bhat jhanna", "तिमि नराम्रो हो"]}
      /> */}
    </>
  );
}
