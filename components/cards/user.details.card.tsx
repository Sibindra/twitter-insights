"use client";
// user Details in profile section
import { UserDataProps, getUserDetails } from "@/lib/user-details";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
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

  const { name, profile_pic_url, location, profile_banner_url } = userData;

  // const name = userData.name;
  // const profileImage = userData.profile_pic_url;
  // const location = userData.location;
  // const profilebanner = userData.profile_banner_url;

  return (
    <div className=" flex flex-col bg-white">
      {/* Banner */}
      <div className="flex  ">
        {profile_banner_url && (
          <Image
            src={profile_banner_url}
            alt="Profile Banner"
            layout="responsive"
            width={200}
            height={100}
            className="w-full"
          />
        )}
      </div>

      {/* profile image and user details */}
      <div className="flex  justify-around ">
        {/* profile image */}
        <div className="flex -mt-14">
          {profile_pic_url && (
            <Image
              src={profile_pic_url}
              alt="User Image"
              width={100}
              height={100}
              className="rounded-full h-2/3  "
            />
          )}
        </div>

        {/* user details */}
        <div className=" flex flex-col justify-center items-center py-3  ">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="text-slate-500"> {username}</p>
          <p className="flex bg-slate-200 p-1 ">
            {" "}
            <MdLocationOn className="w-5 h-5 " /> {location}{" "}
          </p>
        </div>
      </div>

      {/* social media links */}
      <div className="flex  ">
        <a href="https://www.linkedin.com/in/omarmhaimdat/">Linkedin</a>
      </div>
    </div>
  );
}

// sample data:
