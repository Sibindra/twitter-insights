"use client";

import { UserDataProps, getUserDetails } from "@/lib/user-details";
import { useAppSelector } from "@/store/store";
import { getUsersFollowers } from "@/lib/followers";
import { useQuery } from "@tanstack/react-query";
import BannerCard from "@/components/cards/banner.card";
import RecentFollowers from "@/components/cards/followers.card";
import AdditionalInfoCard from "@/components/cards/additional-details.card";

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
      await new Promise((resolve) => setTimeout(resolve, 5000)); // delay for 5 seconds
      return await getUsersFollowers({ user_id: user_id, limit: 1 });
    },
    staleTime: Infinity, 
  });
  
  

  if (userStatus === "loading") {
    return <div>loading... followers...</div>;
  }

  if (userStatus === "error") {
    return <div>error... Retrying....</div>;
  }

  return (
    <div className="flex flex-col md:flex-row p-5 bg-white gap-10 ">
      <div className="flex flex-1 gap-2 flex-col ">
        <div className="">
          <BannerCard {...userData} />
        </div>
      </div>

      <div className="flex  flex-1 gap-1 flex-col ">
        <div className="">
          {/* RECENT FOLLOWES WAS HERE */}
          <RecentFollowers data={followerData?.results} limit={3} />
        </div>
        <div className="">
          <AdditionalInfoCard {...userData} />
        </div>
      </div>
    </div>
  );
}
