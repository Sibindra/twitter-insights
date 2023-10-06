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
import { GraphCardProps } from "./fav-line.graph";

export default function FavCountBarGraph({
  size,
  data,
  className,
}: GraphCardProps) {
  const results = data?.results || [];

  console.log("results = ", results);

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
      <BarChart
        data={Favdata}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" stroke="#ddd" />
        <XAxis
          dataKey="name"
          stroke="#555"
          fontSize={14}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#555"
          fontSize={14}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Legend />
        <Tooltip />

        <Bar
          dataKey="favorite_count"
          fill="#ffc658"
          radius={[6, 6, 0, 0]}
          barSize={25}
        />
        <Bar dataKey="text" fill="#CEC7C8" radius={[6, 6, 0, 0]} barSize={25} />
      </BarChart>
    </ResponsiveContainer>
  );
}
