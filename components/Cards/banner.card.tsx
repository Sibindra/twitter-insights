"use client"
import { UserDataProps, getUserDetails } from "@/lib/userDetails";
import { useEffect, useState } from "react";

interface UserData {
  creation_date: string;
  user_id: string;
  username: string;
  name: string;
  follower_count: number;
  following_count: number;
  is_private: boolean;
  is_verified: boolean;
  location: string;
  profile_pic_url: string;
  description: string;
  external_url: string;
  number_of_tweets: number;
  bot: boolean;
  timestamp: number;
}

export default function TestCard({ username }: UserDataProps) {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserDetails({ username });
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [username]);

  if (!userData) {
    // Loading section code here
    return <p>Loading...</p>;
  }

  const { name, creation_date, follower_count, profile_pic_url } = userData;

  return (
    <main className="border-black border m-3 flex flex-col">
      <p>Name: {name}</p>
      <p>Creation Date: {creation_date}</p>
      <p>Follower Count: {follower_count}</p>
      <img src={profile_pic_url} alt="Profile Pic" />
    </main>
  );
}
