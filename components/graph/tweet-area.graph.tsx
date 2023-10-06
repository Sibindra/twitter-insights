"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export interface GraphCardProps {
  size: number;
  className?: string;
  data: any;
}

export default function TweetAreaGraphCard({
  size,
  className,
  data,
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
      // year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const tweetData = payload[0].payload; // Use the data from payload
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
    <ResponsiveContainer width="100%" height={size} className={className}>
      <AreaChart
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
        <Tooltip content={<CustomTooltip />} />

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
    </ResponsiveContainer>
  );
}
