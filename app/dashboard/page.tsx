"use client";

import LikeRetweetPieChart from "@/components/cards/graph/likes.retweets.piechart";
import getTweets, { TweetPromiseProps } from "@/lib/tweets";
import { useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";

export default function Dashboard() {
  // controllers
  const username = useAppSelector((state) => state.username.username);
  const tweet_input = {
    username: username,
    reply: false,
    limit: 1,
  };

  // FETCH API AND PASS HERE AND REMOVE API CODE FROM ALL THE GRAPHS
  const [tweetData, setTweetData] = useState<TweetPromiseProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getTweets(tweet_input);
  //       setTweetData(data);
  //       setError(null);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //       setError(
  //         "An error occurred while fetching data. Please try again later."
  //       );
  //     }
  //   };
  //   fetchData();
  // }, [tweet_input]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!tweetData) {
    return <p>Loading...</p>;
  }

  return <>
  <LikeRetweetPieChart username={username} reply={false} limit={1}/>
  </>;
}
