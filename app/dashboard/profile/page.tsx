"use client";

import AdditionalInfoCard from "@/components/cards/additional-details.card";
import RecentFollowers, { FollowerData, RecentFollowersProps } from "@/components/cards/followers.card";
import SummaryCard from "@/components/cards/summary.card";
import UserDetailCard from "@/components/cards/user-details.card";
import { UserDataProps, getUserDetails } from "@/lib/user-details";
import { useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";



export default function Profile() {
  const username = useAppSelector((state) => state.username.username);

  const [userData, setUserData] = useState<UserDataProps | null>(null);
const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserDetails({ username });
        setUserData(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("An error occurred while fetching data. Please try again later.");
      }
    };

    fetchData();
  }, [username]);

   console.log(userData)
  if (error) {
    // error display code here (e.g., error banner or animation)
    return <p>Error: {error}</p>;
  }

  if (!userData) {
    // Loading section code here
    return <p>Loading...</p>;
  }


  const dummyFollowersData: FollowerData[] = [
    {
      creation_date: "Sat Apr 23 03:41:42 +0000 2022",
      user_id: "1517710185594249217",
      username: "papapap51261616",
      name: "papa papa",
      follower_count: 4,
      following_count: 43,
      is_private: false,
      is_verified: false,
      location: "",
      profile_pic_url: "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
      description: "Tout",
      external_url: null,
      number_of_tweets: 0,
      bot: false,
      timestamp: 1650685302
    },
    {
      creation_date: "Thu Jan 30 15:05:17 +0000 2020",
      user_id: "1222898521159766016",
      username: "dregaladoc1708",
      name: "Diego Regalado",
      follower_count: 7,
      following_count: 67,
      is_private: false,
      is_verified: true,
      location: "Piura, Peru",
      profile_pic_url: "https://pbs.twimg.com/profile_images/1222902478238179337/lHNtpvtP_normal.jpg",
      description: "🧑🏻‍🏫 Ingeniero de Sistemas",
      external_url: null,
      number_of_tweets: 237,
      bot: false,
      timestamp: 1580396717
    }
  ];

  return (
    <div className="flex flex-col md:flex-row p-5 bg-white gap-10 ">
      <div className="flex flex-1 gap-3 flex-col ">
        <div className=" ">
          <UserDetailCard {...userData}
          />
        </div>

        <div className="">
        <SummaryCard {...userData} />
        </div>

        <div className="border rounded border-black">Recent Hashtags</div>
      </div>

      <div className="flex  flex-1 gap-3 flex-col ">
        <div className="">
          {/* <RecentFollowersCard    /> */}
          <RecentFollowers data={dummyFollowersData}/>
        </div>
        <div className="">
          <AdditionalInfoCard {...userData}  />
        </div>
      </div>
    </div>
  );
}
