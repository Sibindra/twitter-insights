import getTweets, { TweetProps } from "@/lib/getTweets";
import React from "react";

export default async function TweetCard({
  username,
  reply,
  limit,
}: TweetProps) {
  const data = await getTweets({ username, reply, limit });

  console.log(data);

  const tweet_id = data.results[0]?.text;

  return <div>{tweet_id && <div>ID: {tweet_id}</div>}</div>;
  
}

// SAMPLE RESPONSE
// tweet_id:"1619711691515899906"
// creation_date:"Sun Jan 29 14:58:54 +0000 2023"
// text:"https://t.co/tb9zX3GfBc"
// media_url:null
// video_url:null
