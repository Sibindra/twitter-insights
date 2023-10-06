"use client";
import { Card } from "@/components/ui/card";
import getTweets, { TweetPromiseProps, TweetProps } from "@/lib/tweets";
import { useEffect, useState } from "react";
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { GraphCardProps } from "./fav.count.linegraph.card";


export default function TweetAreaGraphCard({ username, reply, limit}: TweetProps) {
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
    return <p>Error: {error}</p>;
  }

  if (!tweetData) {
    return <p>Loading...</p>;
  }

  const results = tweetData?.results || [];

  console.log(results);

  const graph_data = results.map((result) => ({
    name: result.creation_date,
    views: result.views,
    retweetCount: result.retweet_count,
    reply_count:result.reply_count,
  }));
  
  // console.log(data);
  return (
    <Card className="border-black border m-4  p-20">
      <AreaChart
        width={800}
        height={500}
        data={graph_data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        
        
        <Area
        type="monotone"
        dataKey="retweetCount"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
        />
        <Area
        type="monotone"
        dataKey="reply_count"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
        />
        <Area
          type="monotone"
          dataKey="views"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        
        
      </AreaChart>
    </Card>
  );
}