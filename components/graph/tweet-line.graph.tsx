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

export default function TweetLineGraphCard({
  size,
  data,
  className,
}: GraphCardProps) {
  const results = data?.results || [];
  console.log(data);

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
      year: "numeric",
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
    <ResponsiveContainer width="100%" height={size} className={className}>
    <LineChart
      data={graph_data}
      margin={{
        top: 20, 
        right: 30,
        left: 20,
        bottom: 20, 
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      <Line type="monotone" dataKey="retweetCount" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
  

  );
}
