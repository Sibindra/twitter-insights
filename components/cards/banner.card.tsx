'use client'
import { UserDataProps } from "@/app/api/user-details";
import { FaMapMarkerAlt, FaLink, FaCheckCircle } from "react-icons/fa";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function BannerCard({
  profile_banner_url,
  profile_pic_url,
  location,
  name,
  username,
  external_url,
  follower_count,
  description,
}: UserDataProps) {
  const isVerified = follower_count !== undefined && follower_count >= 500000;

  return (
    <Card className="w-full max-w-2xl mx-auto rounded-sm p-2 shadow-sm ">
      {/* Cover Photo */}

      {profile_banner_url ? (
        <div
          className="bg-cover bg-center h-48 md:h-64 rounded-none"
          style={{ backgroundImage: `url(${profile_banner_url})` }}
        />
      ) : (
        <div className="bg-cover bg-center h-48 md:h-64 rounded-none border flex items-center justify-center">
          <Badge variant={"destructive"}>No Banner Img </Badge>
        </div>
      )}

      {/* User Info */}
      <div className="p-3 mt-4 md:mt-8 ">
        {profile_pic_url && (

        <Image src={profile_pic_url} alt="not found" width={100} height={100} className=" w-10 h-10 rounded-full" />
        )}
        <h1 className="text-3xl font-semibold flex items-center justify-start gap-2">
          {name}
          {isVerified && (
            <span className="text-blue-500 ml-1">
              <FaCheckCircle size={15} />
            </span>
          )}
        </h1>

        <p className="text-gray-600 text-base mt-4">
          <Badge variant={"secondary"} className="">
            @{username}
          </Badge>
        </p>

        <Card className=" my-6 border-none shadow-none text-secondary-foreground">
          {description ? (
            <p className="">{description}</p>
          ) : (
            <p className="text-slate-500">The user has no summary ....🕵️</p>
          )}
        </Card>

        {location ? (
          <div className="mt-2 flex items-center justify-end rounded-sm">
            <Badge variant={"outline"} className=" rounded-sm">
              <FaMapMarkerAlt className="text-gray-500 mr-1" />
              <p className="">{location}</p>
            </Badge>
          </div>
        ) : (
          <div className="mt-2 flex items-center justify-end rounded-sm">
            <Badge variant={"outline"} className=" rounded-sm">
              <FaMapMarkerAlt className="text-gray-500 mr-1" />
              <p className="">location is private...</p>
            </Badge>
          </div>
        )}

        {external_url && (
          <div className="mt-2 flex items-center justify-end ">
            <Badge variant={"outline"} className=" rounded-sm">
              <FaLink className="text-gray-500 mr-1" />
              <a
                href={external_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {external_url}
              </a>
            </Badge>
          </div>
        )}
      </div>
    </Card>
  );
}
