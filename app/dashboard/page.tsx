"use client";

import FavCountGraph from "@/components/cards/graph/fav-count.linegraph.card";
import TweetAreaGraphCard from "@/components/cards/graph/tweet.areagraph.card";
import TweetLineGraphCard from "@/components/cards/graph/tweet.linegraph.card";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTweets(tweet_input);
        setTweetData(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(
          "An error occurred while fetching data. Please try again later."
        );
      }
    };
    fetchData();
  }, [tweet_input]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!tweetData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="flex flex-col">
        {/* fav count graph */}
        <div>
          <FavCountGraph
            width={"90%"}
            height={300}
            data={tweetData}
            // styling here
            className="m-10"
          />
        </div>


{/* Tweet area graph */}
        <div>
          <TweetAreaGraphCard 
          width={"90%"} 
          height={"300"} 
          data={tweetData} 
          className=""
          />
        </div>


        {/* tweet line Graph */}
        <div>
          <TweetLineGraphCard width={"50%"} height={"400"} data={tweetData} />
        </div>
      </div>
    </>
  );
}
