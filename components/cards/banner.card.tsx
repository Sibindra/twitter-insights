"use client"
import { UserDataProps, getUserDetails } from "@/lib/user-details";
import { useEffect, useState } from "react";

export default function BannerCard({ username }: UserDataProps) {
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

  if (error) {
    // error diplay code here (eg: error banenr or animation)
    return <p>Error: {error}</p>;
  }

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
