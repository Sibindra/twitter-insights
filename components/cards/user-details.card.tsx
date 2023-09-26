"use client"
import { UserDataProps } from "@/lib/user-details";
import Image from "next/image";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

export default function UserDetailCard({follower_count, profile_banner_url, profile_pic_url, location, name, username  }: UserDataProps) {

  return (
    <div className="flex flex-col bg-slate-50 rounded">
      {/* Banner */}
      <div className="flex  ">
        {profile_banner_url? ( // check profile banner
          <Image
            src={profile_banner_url}
            alt="Profile Banner"
            width={500}
            height={500}
            className=" w-full"
          />
        ):(<Image //If profile banner is not available
          src={""}
          alt="Profile Banner"
          width={500}
          height={500}
          className="w-full"
        />)}
      </div>

      {/* profile image and user details */}
      <div className="flex gap-3 items-center p-3">
        {/* profile image */}
        <div className="flex -mt-28 ml-5">
          {profile_pic_url && ( // Check if profile_pic_url is defined
            <Image
              src={profile_pic_url}
              alt="User Image"
              width={100}
              height={100}
              className="  rounded-full "
            />
          )}
        </div>

        {/* user details */}
        <div className="flex flex-col justify-center items-center ml-4  p-2">
          <h2 className="flex text-xl font-bold mb-2 justify-center gap-2 items-center ">{name}
          {follower_count >=500000 ? <span><BsFillPatchCheckFill  size={25} className=" text-blue-500"/></span> : <span></span>}
          
          </h2>
          <p className="text-slate-500"> {username}</p>
          {location && (
            <p className="flex bg-violet-200 p-1 rounded">
              <MdLocationOn size={20} className="  text-gray-600" /> {location}
            </p>
          )}
          
        </div>
      </div>

      {/* social media links */}
      <div className="flex justify-center items-center p-3">
        <a href="https://www.linkedin.com/in/omarmhaimdat/">Linkedin</a>
      </div>
    </div>
  );
}
