"use client";
import { UserDataProps } from "@/lib/user-details";
import Image from "next/image";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import {
  Card,
  CardContent,
  
} from "@/components/ui/card";

export default function UserDetailCard({
  follower_count,
  profile_banner_url,
  profile_pic_url,
  location,
  name,
  username,
}: UserDataProps) {
  

  return (
    <Card >
      {/* Banner */}
      
      <div className="flex rounded  ">
        {profile_banner_url ? ( // check profile banner
          <Image
            src={profile_banner_url}
            alt="Profile Banner"
            width={500}
            height={500}
            className=" w-full "
          />
        ) : (
          <Image //If profile banner is not available
            src={""}
            alt="Profile Banner"
            width={500}
            height={150}
            className="w-full bg-primary"
          />
        )}
      </div>
      
      
      {/* profile image and user details */}
      <div className="flex flex-col md:flex-row md:gap-3 md:items-center md:p-3">
      <CardContent className="flex md:-mt-24 md:ml-5 ">
        {/* profile image */}
        
          {profile_pic_url && ( // Check if profile_pic_url is defined
            <Image
              src={profile_pic_url}
              alt="User Image"
              width={100}
              height={100}
              className=" rounded-full "
            />
          )}
        
        </CardContent>

        {/* user details */}
        <CardContent className="flex flex-col md:justify-center md:items-center ">
          {follower_count !== undefined && (
            <h2 className="flex md:text-xl sm:text-xl font-bold md:mb-2 md:justify-center md:gap-2 sm:gap-1 md:items-center ">
              {name}
              {follower_count >= 500000 ? (
                <span>
                  <BsFillPatchCheckFill size={20} className=" text-blue-500 " />
                </span>
              ) : (
                <span></span>
              )}
            </h2>
          )}
          <p className="text-slate-500"> {username}</p>
          {location && (
            <p className="flex bg-primary p-1 rounded">
              <MdLocationOn size={20} className="  text-gray-600" /> {location}
            </p>
          )}
        </CardContent>
      </div>
      

      {/* social media links */}
      <div className="flex justify-center items-center p-3">
        <a href="https://www.linkedin.com/in/omarmhaimdat/">Linkedin</a>
      </div>
    </Card>
  );
}
