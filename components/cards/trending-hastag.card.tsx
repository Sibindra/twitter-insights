"use client";

import React from "react";
import {
  TrendingHashtagProps,
  getTrendingHashtags,
} from "@/lib/api-calls/trending-hashtag";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "../ui/badge";

export default function TrendingHashtagCard({ woeid }: TrendingHashtagProps) {


  const { data: hashtagData, status: hashtagStatus } = useQuery({
    queryKey: ["trending-hashtag", 1],
    queryFn: async () => {
      // No need to use await here
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return getTrendingHashtags({ woeid: woeid });
    },
    staleTime: Infinity,
  });

  console.log(hashtagData);


  return (
    <main className="flex flex-wrap gap-4 items-center justify-center">
      {hashtagData && hashtagData.map((hashtag: any) => {
        return hashtag.trends.map((trend: any) => {
          return (
            <div key={trend.name}>
              <Badge variant={"outline"}>
                <a href={trend.url}>{trend.name}</a>
              </Badge>
            </div>
          );
        });
      })}
    </main>
  );
}
