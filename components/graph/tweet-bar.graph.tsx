"use client";
import React from "react";
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
import { GraphCardProps } from "./tweet-area.graph";

export default function TweetBarGraphCard({
  size,
  data,
  className,
}: GraphCardProps) {
  const results = data?.results || [];

  const graph_data = results.map((result: any) => ({
    name: formatDate(result.creation_date),
    views: result.views,
    retweetCount: result.retweet_count,
    quote_count: result.quote_count,
    reply_count: result.reply_count, 
  }));

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const tweetData = payload[0].payload;
      if (tweetData) {
        return (
          <div className="custom-tooltip border bg-white dark:bg-stone-500 p-1">
            <p>{tweetData.tweetText}</p>
          </div>
        );
      }
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={size} className={className}>
      <LineChart
        data={graph_data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          yAxisId="left"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <YAxis yAxisId="right" orientation="right" />

        <Tooltip content={<CustomTooltip />} />
        <Legend />

        <Line
          yAxisId="left"
          type="monotone"
          dataKey="quote_count"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />

        <Line
          yAxisId="right"
          type="monotone"
          dataKey="reply_count"
          stroke="#82ca9d"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
