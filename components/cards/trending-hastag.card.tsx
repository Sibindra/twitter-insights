'use client';

import { TrendingHashtagProps, getTrendingHashtags } from "@/lib/trending-hashtag";
import { useEffect, useState } from "react";

export default function TrendingHashtagCard({woeid}: TrendingHashtagProps) {

    const [trendinghashtagData, setTrendingHastagData] = useState<Array<any> | null>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getTrendingHashtags({ woeid});
            setTrendingHastagData(data);
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        };


        fetchData();
    },[woeid])


    // console.log(trendinghashtagData)


    const hastagName = trendinghashtagData ? trendinghashtagData[0].trends[0].name : null;
    const hashtagCount = trendinghashtagData ? trendinghashtagData[0].trends[0].tweet_volume : null;
    


    return(
      <div>
        Name: {hastagName}

        <br>
        </br>

        Count: {hashtagCount}
      </div>
    )
}
