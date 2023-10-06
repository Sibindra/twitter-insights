"use client";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
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
    tweetText: result.text,
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
          <div className="custom-tooltip border bg-white p-1">
            <p>{tweetData.tweetText}</p>
          </div>
        );
      }
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={size}>
    <BarChart
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
        stroke="#888888"
        fontSize={12}
        tickLine={false}
        axisLine={false}
        tickFormatter={(value) => `${value}`}
      />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
  
      <Bar
        type="monotone"
        dataKey="reply_count"
        stackId="1"
        fill="#ffc658" 
        radius={[4, 4, 0, 0]} 
        barSize={20} 
      />
      <Bar
        type="monotone"
        dataKey="retweetCount"
        stackId="1"
        fill="#8884d8" 
        radius={[4, 4, 0, 0]} 
        barSize={20} 
      />
    </BarChart>
  </ResponsiveContainer>
  
  );
}
