"use client";
import { UserDataProps } from "@/lib/user-details";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";

export default function BannerCard({
  profile_banner_url,
  profile_pic_url,
  location,
  name,
  username,
}: UserDataProps) {
  return (
    <div className="flex flex-col bg-gray-200">
      {/* Banner */}
      <div className="flex border border-b-2 border-b-black">
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
          {profile_pic_url ? (
            <Image
              src={profile_pic_url}
              alt="User Image"
              width={100}
              height={100}
              className="rounded-full h-3/5"
            />
          ) : (
            <p className="">No profile picture available</p>
          )}
        </div>

        {/* user details */}
        <div className="flex flex-col justify-center items-center py-3">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="text-slate-500"> {username}</p>
          {location && (
            <p className="flex bg-gray-100 p-1">
              <MdLocationOn size={20} className=" text-gray-600" /> {location}
            </p>
          )}
        </div>
      </div>

      {/* social media links */}
      <div className="flex">
        <a href="https://www.linkedin.com/in/omarmhaimdat/">Linkedin</a>
      </div>
    </div>
  );
}
