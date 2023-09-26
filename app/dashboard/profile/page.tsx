"use client";

import AdditionalInfoCard from "@/components/cards/additional.details.card";
import RecentFollowersCard from "@/components/cards/followers.card";
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
  }, []);

   console.log(userData)
  if (error) {
    // error display code here (e.g., error banner or animation)
    return <p>Error: {error}</p>;
  }

  if (!userData) {
    // Loading section code here
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col md:flex-row p-10 bg-violet-200 gap-10">
      <div className="flex flex-1 gap-3 flex-col">
        <div className=" rounded-sm">
          <UserDetailCard {...userData}
          />
        </div>

        <div className="rounded-sm">
        <SummaryCard {...userData} />
        </div>

        <div className="border rounded-sm border-black">Recent Hashtags</div>
      </div>

      <div className="flex rounded-sm flex-1 gap-3 flex-col ">
        <div className="">
          <RecentFollowersCard   />
        </div>
        <div className="rounded-sm">
          <AdditionalInfoCard {...userData}  />
        </div>
      </div>
    </div>
  );
}
