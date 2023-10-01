import { Card } from "@/components/ui/card";
import  { TweetPromiseProps } from "@/lib/tweets";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";


export interface GraphCardProps {
  width: number | string;
  height: number | string;
  data: TweetPromiseProps;
  className?: string;
}

export default function FavCountGraph({ width, height, data,className  }: GraphCardProps) {
 
  const results = data?.results || [];

  const graph_data = results.map((result) => ({
    name: result.creation_date,
    text: result.text,
    favorite_count: result.favorite_count,
  }));
  

  return (
    <Card>
      <ResponsiveContainer width={width} height={height} className={className}>
        <LineChart
          data={graph_data}
          className="bg-sky-100"
          margin={{
            top: 5,
            right: 3,
            left: 2,
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
            dataKey="favorite_count"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
