"use client";
import  {getTrendingHashtags, TrendingHashtagProps } from "@/lib/trending-hashtag";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function TrendingGraphCard({ woeid }: TrendingHashtagProps) {
  const [trendinghashtagData, setTrendingHashtagData] = useState<Array<any> | null>(null);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrendingHashtags({ woeid });
        setTrendingHashtagData(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(
          "An error occurred while fetching data. Please try again later."
        );
      }
    };

    fetchData();
  }, [woeid]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!trendinghashtagData) {
    return <p>Loading...</p>;
  }

  const results = trendinghashtagData[0].trends || [];

  console.log(results);

  const data = results.map((result:any) => ({
    name: result.name,
    tweet_volume: result.tweet_volume,
    query: result.query,
    url:result.url,
  }));

  return (
    <div className="border-black border m-4  p-20">
      <LineChart
        width={800}
        height={500}
        data={data}
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
          dataKey="name"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="query"
          stroke="#644245"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="tweet_volume"
          stroke="#000000"
          activeDot={{ r: 8 }}
        />
        
        {/* <Line type="monotone" dataKey="views" stroke="#82ca9d" 
        activeDot={{ r: 8 }}
      
      /> */}
      </LineChart>
    </div>
  );
}
