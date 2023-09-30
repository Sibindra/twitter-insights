'use client';

import { TrendingHashtagProps, getTrendingHashtags } from "@/lib/trending-hashtag";
import { useEffect, useState } from "react";

export default function TrendingHashtagCard({ woeid }: TrendingHashtagProps) {
  const [trendinghashtagData, setTrendingHashtagData] = useState<Array<any> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrendingHashtags({ woeid });
        setTrendingHashtagData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [woeid]);

  console.log(trendinghashtagData);



  if (trendinghashtagData === null) {
    return <p>Loading...</p>;
  }

  // Extract trends from trendinghashtagData
  const trends = trendinghashtagData[0]?.trends || [];
  const hashtagName = trends[0]?.name || null;
  const hashtagCount = trends[0]?.tweet_volume || null;

  return (
    <div>
      Name: {hashtagName}
      <br />
      Count: {hashtagCount}
    </div>
  );
}
