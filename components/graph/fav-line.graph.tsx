import { Card } from "@/components/ui/card";
import  { TweetPromiseProps, TweetProps } from "@/lib/tweets";
import { UserDataProps } from "@/lib/user-details";
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
  size: number
  data: any;
  className?: string;
}

export default function FavCountGraph({ size, data,className  }: GraphCardProps) {
 
  const results = data?.results || [];

  const graph_data = results.map((result:any) => ({
    name: result.creation_date,
    text: result.text,
    favorite_count: result.favorite_count,
  }));
  

  return (
    <Card>
      <ResponsiveContainer width={'100%'} height={size} className={className}>
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
           <Line
            type="monotone"
            dataKey="name"
            stroke="#ffffff"
            activeDot={{ r: 8 }}
          />
           <Line
            type="monotone"
            dataKey="text"
            stroke="#000000"
            activeDot={{ r: 8 }}
          />

        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
