"use client";
import React, { useEffect, useState } from "react";
import getTweets, { TweetPromiseProps, TweetProps } from "@/lib/tweets";

export default function RepliesCard({ username, reply, limit }: TweetProps) {
  const [tweetData, setTweetData] = useState<TweetPromiseProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTweets({ username, reply, limit });
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
  }, [username, reply, limit]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tweetData) {
    return <div>Loading...</div>;
  }

  const tweets = tweetData.results || [];

  return (
    <div>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.tweet_id}>
            <p>{tweet.text}</p>
            <p className=" text-red-600">
              Retweets Count: {tweet.retweet_count}
            </p>

          </li>
        ))}
      </ul>
    </div>
  );
}
