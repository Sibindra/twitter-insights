// summary section in profile page
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
        setError(
          "An error occurred while fetching data. Please try again later."
        );
      }
    };

    fetchData();
  }, [username]);

  if (error) {
    // error display code here (e.g., error banner or animation)
    return <p>Error: {error}</p>;
  }

  if (!userData) {
    // Loading section code here
    return <p>Loading...</p>;
  }

  const { description } = userData;

  return (
    <div className="flex flex-col bg-white p-5">
      <h1 className="text-lg font-bold mb-3">Summary</h1>
      {description ? (
        <p className="text-slate-500">{description}</p>
      ) : (
        <p className="text-slate-500">No summary available</p>
      )}
    </div>
  );
}
