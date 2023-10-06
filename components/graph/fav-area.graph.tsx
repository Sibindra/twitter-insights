import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { GraphCardProps } from "./fav-line.graph";

export default function FavCountAreaGraph({
  size,
  data,
  className,
}: GraphCardProps) {
  // Extract results from data or set it to an empty array
  const results = data?.results || [];

  // Map results to the required format
  const Favdata = results.map((result: any) => ({
    name: formatDate(result.creation_date),
    text: result.text,
    favorite_count: result.favorite_count,
  }));

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <ResponsiveContainer width="100%" height={size} className={className}>
      <AreaChart
        data={Favdata} 
        margin={{
          top: 5,
          right: 30, 
          left: 0,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Area
          type="monotone"
          dataKey="favorite_count"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="text"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
