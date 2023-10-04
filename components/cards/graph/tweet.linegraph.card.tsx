"use client";
import { Card } from "@/components/ui/card";
import getTweets, { TweetPromiseProps, TweetProps } from "@/lib/tweets";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { GraphCardProps } from "./fav.count.linegraph.card";

export default function TweetLineGraphCard({
  width, height, data,className
}: GraphCardProps) {
 

  const results = data?.results || [];

  // console.log(results);

  const graph_data = results.map((result) => ({
    name: result.creation_date,
    views: result.views,
    retweetCount: result.retweet_count,
  }));

  return (
    <Card className="border-black border m-4  p-20">
      <ResponsiveContainer>
        <LineChart
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
          <Legend />
          <Line
            type="monotone"
            dataKey="retweetCount"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
