"use client";
import getTweets, { TweetPromiseProps, TweetProps } from "@/lib/tweets";
import { UserDataProps, UserPromiseProps, getUserDetails } from "@/lib/user-details";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { PieChart, Pie } from "recharts";

export default function LikeRetweetPieChart({ username, reply, limit }: TweetProps) {
  // const [tweetData, setTweetData] = useState<TweetPromiseProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { data: tweetData, status: tweetStatus } = useQuery({
    queryKey: ["tweets", username],
    queryFn: async () => {
      // await new Promise((resolve) => setTimeout(resolve, 10000));
      return await getTweets({ username: username, limit: 1, reply: false });
    },
  });


  if (tweetStatus === "loading") {
    return <div>loading...</div>;
  }


  if (tweetStatus=== "error") {
    return <div>error</div>;
  }



  console.log('results = ' , tweetData)

  const resultTweets = (tweetData as TweetPromiseProps)?.results || [];

  const data = resultTweets.map((result) => ({
    name: result.creation_date,
    views: result.views,
    retweetCount: result.retweet_count,
  }));


  console.log('data = ',data)

  // const data1 = results.map((result) => ({
  //   name: result.creation_date,
  //   views: result.views,
  //   favorite_count: result.favorite_count,

  // }));

// const data01 =[
//     {Name:"liked",value:data.},
//     {Name:"not liked",value:(views-favorite_count)}
// ];

// const data02 =[
//     {Name:"retweeted",value:retweetCount},
//     {Name:"not retweeted",value:(views-retweetCount)}
// ];


// console.log(data01);
  
 
  return (
    <div className="border-black border m-4  p-20">
    {/* <PieChart width={400} height={400}>
      <Pie
        data={data01}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
      />
      <Pie
        data={data02}
        dataKey="value"
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      />
    </PieChart> */}
 
    </div>
  );
}
