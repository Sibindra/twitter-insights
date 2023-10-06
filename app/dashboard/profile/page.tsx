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
import { Skeleton } from "@/components/ui/skeleton";

export default function Profile() {
  const username = useAppSelector((state) => state.username.username);

  // user details
  const { data: userData, status: userStatus } = useQuery<UserDataProps>({
    queryKey: ["user-details", username],
    queryFn: async () => await getUserDetails({ username }),
    // FIX THIS
    staleTime: Infinity,
  });

  const user_id = userData?.user_id as number;

  // followers details
  const { data: followerData, status: followerStatus } = useQuery({
    queryKey: ["followers", user_id],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return await getUsersFollowers({ user_id: user_id, limit: 1 });
    },

    staleTime: Infinity,
  });

  // tweets details
  const { data: tweetData, status: tweetStatus } = useQuery({
    queryKey: ["tweets", username],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 10000));
      return await getTweets({ username: username, limit: 3, reply: true });
    },

    staleTime: Infinity,
  });

  const resultTweets = (tweetData as TweetPromiseProps)?.results || [];
  // filerting limit
  const filteredResultTweets = resultTweets.slice(0, 3);

  const sentimentInput = filteredResultTweets.map((tweet) => tweet.text);


  console.log("input = ", sentimentInput);

  if (userStatus === "loading") {
    return <div>
      
      <Skeleton className="w-[100px] h-[20px] rounded-full" />

    </div>;
  }

  if (userStatus === "error") {
    return <div>error... </div>;
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

          {filteredResultTweets.map((tweet, key) => (
            <TweetCard
              key={key}
              name={tweet.user.name}
              username={tweet.user.username}
              tweetText={tweet.text}
              comments={tweet.reply_count}
              retweets={tweet.retweet_count}
              likes={tweet.favorite_count}
              date={tweet.creation_date}
              userImg={tweet.user.profile_pic_url}
              usermedia={tweet.media_url}
              source={tweet.source}
              sentimentInput={sentimentInput}
            />
          ))}
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
