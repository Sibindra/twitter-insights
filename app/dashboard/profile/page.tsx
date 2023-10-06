"use client";

import { UserDataProps, getUserDetails } from "@/lib/user-details";
import { useAppSelector } from "@/store/store";
import { getUsersFollowers } from "@/lib/followers";
import { useQuery } from "@tanstack/react-query";
import BannerCard from "@/components/cards/banner.card";
import RecentFollowers from "@/components/cards/followers.card";
import AdditionalInfoCard from "@/components/cards/additional-details.card";
import TweetCard from "@/components/cards/tweet.card";
import getTweets, { TweetPromiseProps } from "@/lib/tweets";
import { useState } from "react";

export default function Profile() {
  const username = useAppSelector((state) => state.username.username);

  const { data: userData, status: userStatus } = useQuery<UserDataProps>({
    queryKey: ["user-details", username],
    queryFn: async () => await getUserDetails({ username }),
  });

  const user_id = userData?.user_id as number;

  const { data: followerData, status: followerStatus } = useQuery({
    queryKey: ["followers", user_id],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return await getUsersFollowers({ user_id: user_id, limit: 1 });
    },
    staleTime: Infinity,
  });

  const { data: tweetData, status: tweetStatus } = useQuery({
    queryKey: ["tweets", username],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 10000));
      return await getTweets({ username: username, limit: 3, reply: true });
    },
  });

  const resultTweets = (tweetData as TweetPromiseProps)?.results || [];

  console.log("tweet result = ", resultTweets);

  if (userStatus === "loading") {
    return <div>loading... followers...</div>;
  }

  if (userStatus === "error") {
    return <div>error... Retrying....</div>;
  }

  return (
    <div className="flex flex-col md:flex-row p-5 bg-secondary gap-3 ">
      {/* left container */}
      <div className="flex flex-1 gap-3 flex-col ">
        {/* BANNER */}
        <BannerCard {...userData} />

        {/* TWEETS */}
        <div className="flex flex-col p-5 gap-2 border bg-white ">
          <h3 className=" text-lg font-bold">Most Recent Tweets</h3>

          {/* TODO: 3 for test need to map tweets data here  */}

          {/* map it here */}

          {resultTweets.map((tweet) => (
            <TweetCard
              name={tweet.user.name}
              username={tweet.user.username}
              tweetText={tweet.text}
              comments={tweet.reply_count}
              retweets={tweet.retweet_count}
              likes={tweet.favorite_count}
              date={tweet.creation_date}
              userImg={tweet.user.profile_pic_url
              }
              usermedia={tweet.media_url}
            />
          ))}
          {/* <TweetCard
            name={"Elon Musk"}
            username={"elonmusk"}
            date="27 Jan 2020 5.07am EST"
            userImg={
              "https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3175&q=80"
            }
            tweetText={"this is a test tweet text 😱"}
            comments={10}
            retweets={50}
            likes={500}
          /> */}
        </div>
      </div>

      {/* right container */}
      <div className="flex  flex-1 gap-3 flex-col ">
        {/* RECENT FOLLOWERS */}
        <RecentFollowers data={followerData?.results} limit={5} />

        {/* ADDITIONAL CARDS */}
        <AdditionalInfoCard {...userData} />
      </div>
    </div>
  );
}
