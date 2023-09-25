"use client";
import getTweets, { TweetPromiseProps, TweetProps } from "@/lib/tweets";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

export default function TweetGraphCard({ username, reply, limit }: TweetProps) {
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
        setError("An error occurred while fetching data. Please try again later.");
      }
    };

    fetchData();
  }, [username, reply, limit]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!tweetData) {
    return <p>Loading...</p>;
  }


  const results = tweetData?.results || [];


  const data = results.map((result) => ({
    name: result.creation_date,
    views: result.views,
    retweetCount: result.retweet_count,
  }));


  return <div className="border-black border m-4  p-5">
    <LineChart
      width={1100}
      height={400}
      data={data}
      className=" bg-sky-100 "
      margin={{
        top: 5,
        right: 3,
        left: 2,
        bottom: 5
      
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="retweetCount"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
        
      />
      <Line type="monotone" dataKey="views" stroke="#82ca9d" 
        activeDot={{ r: 8 }}
      
      />
    </LineChart>
  </div>;
}
