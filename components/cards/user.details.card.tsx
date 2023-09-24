"use client"
import { UserDataProps, getUserDetails } from "@/lib/user-details";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";

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

  const { name, profile_pic_url, location, profile_banner_url, description } = userData;

  return (
    <div className="flex flex-col bg-white">
      {/* Banner */}
      <div className="flex">
        {profile_banner_url && (
          <Image
            src={profile_banner_url}
            alt="Profile Banner"
            // layout="responsive"
            width={200}
            height={100}
            className="w-full"
          />
        )}
      </div>

      {/* profile image and user details */}
      <div className="flex justify-around">
        {/* profile image */}
        <div className="flex -mt-14">
          {profile_pic_url ? ( // Check if profile_pic_url is defined
            <Image
              src={profile_pic_url}
              alt="User Image"
              width={100}
              height={100}
              className="rounded-full h-3/5"
            />
          ) : (
            <p className="text-xl font-bold mb-2">No profile picture available</p> // Render alternative content
          )}
        </div>

        {/* user details */}
        <div className="flex flex-col justify-center items-center py-3">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="text-slate-500"> {username}</p>
          {location && (
            <p className="flex bg-slate-200 p-1">
              <MdLocationOn className="w-5 h-5" /> {location}
            </p>
          )}
          {description && <p className="text-slate-500">{description}</p>}
        </div>
      </div>

      {/* social media links */}
      <div className="flex">
        <a href="https://www.linkedin.com/in/omarmhaimdat/">Linkedin</a>
      </div>
    </div>
  );
}
