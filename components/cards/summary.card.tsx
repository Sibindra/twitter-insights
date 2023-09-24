// summary section in profile page
"use client";
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
        setError(
          "An error occurred while fetching data. Please try again later."
        );
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

  const { description } = userData;
  console.log(username)

  return (
    <div className="flex flex-col bg-white p-5">
      <h1 className=" text-lg font-bold mb-3">Summary</h1>
      {description}
    </div>
  );
}
