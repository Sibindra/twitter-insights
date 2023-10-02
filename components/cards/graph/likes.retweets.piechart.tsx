"use client";
import getTweets, { TweetPromiseProps, TweetProps } from "@/lib/tweets";
import { useEffect, useState } from "react";
import { PieChart, Pie } from "recharts";

export default function LikeRetweetPieChart({ username, reply, limit }: TweetProps) {
  const [tweetData, setTweetData] = useState<TweetPromiseProps | null>(null);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTweets({ username, reply, limit });
        setTweetData(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(
          "An error occurred while fetching data. Please try again later."
        );
      }
    };

    fetchData();
  }, [username, reply, limit]);
  console.log("a",tweetData)

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!tweetData) {
    return <p>Loading...</p>;
  }


  const results = tweetData?.results || [];
  const views=results[0]?.views || null;
  const retweetCount=results[0]?.retweet_count || null;
  const favorite_count=results[0]?.favorite_count || null;


  // console.log(results);

  // const data = results.map((result) => ({
  //   name: result.creation_date,
  //   views: result.views,
  //   retweetCount: result.retweet_count,
  // }));

//   const data1 = results.map((result) => ({
//     name: result.creation_date,
//     views: result.views,
//     favorite_count: result.favorite_count,

//   }));

const data01 =[
    {Name:"liked",value:favorite_count},
    {Name:"not liked",value:(views-favorite_count)}
];

const data02 =[
    {Name:"retweeted",value:retweetCount},
    {Name:"not retweeted",value:(views-retweetCount)}
];
console.log(data01);
  
 
  return (
    <div className="border-black border m-4  p-20">
    <PieChart width={400} height={400}>
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
    </PieChart>
 
    </div>
  );
}
