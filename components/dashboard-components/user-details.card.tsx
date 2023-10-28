import { UserDataProps } from "@/lib/fetches/user-details";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import {
  FaCheckCircle,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

export default function BannerCard({
  profile_banner_url,
  profile_pic_url,
  location,
  follower_count,
  name,
  username,
  external_url,
}: UserDataProps) {
  const isVerified = follower_count !== undefined && follower_count >= 500000;

  // Function to render social media icons based on the platform
  const renderSocialMediaIcon = (url: string) => {
    if (url.includes("twitter.com")) {
      return (
        <FaTwitter
          size={25}
          className="rounded-full border border-sky-blue-500 p-1 cursor-pointer"
          onClick={() => window.open(url, "_blank")}
        />
      );
    } else if (url.includes("instagram.com")) {
      return (
        <FaInstagram
          size={25}
          className="rounded-full border border-sky-blue-500 p-1 cursor-pointer"
          onClick={() => window.open(url, "_blank")}
        />
      );
    } else if (url.includes("facebook.com")) {
      return (
        <FaFacebook
          size={25}
          className="rounded-full border border-sky-blue-500 p-1 cursor-pointer"
          onClick={() => window.open(url, "_blank")}
        />
      );
    } else if (url.includes("linkedin.com")) {
      return (
        <FaLinkedin
          size={25}
          className="rounded-full border border-sky-blue-500 p-1 cursor-pointer"
          onClick={() => window.open(url, "_blank")}
        />
      );
    }
    return null;
  };

  return (
    <Card>
      {/* Profile Banner */}
      <div className="relative">
        {profile_banner_url ? (
          <Image
            src={profile_banner_url}
            alt="Profile Banner"
            layout="responsive"
            width={1500}
            height={500}
          />
        ) : (
          <div className="bg-gradient-to-r from-blue-500 to-blue-300 h-40"></div>
        )}
      </div>

      {/* Profile Image and User Details */}
      <div className="flex flex-col md:flex-row md:gap-3 md:items-center md:p-3">
        <CardContent className="relative">
          {/* Profile Image */}
          {profile_pic_url && (
            <div className="border-4 border-blue-400 rounded-full">
              <Image
                src={profile_pic_url}
                alt="User Image"
                width={100}
                height={100}
                quality={100}
                className="rounded-full"
              />
            </div>
          )}
        </CardContent>

        {/* User Details */}
        <CardContent className="text-center md:text-left">
          {follower_count !== undefined && (
            <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">
              {name}
              {isVerified && (
                <span className="text-blue-500 ml-1">
                  <FaCheckCircle size={15} />
                </span>
              )}
            </h2>
          )}
          <p className="text-gray-600">@{username}</p>

          {location && (
            <p className="flex items-center mt-2 border">
              <MdLocationOn size={18} className="text-gray-600 mr-1" />{" "}
              {location}
            </p>
          )}
          {external_url && (
            <p className="flex items-center mt-2">
              {renderSocialMediaIcon(external_url)}
            </p>
          )}
        </CardContent>
      </div>

      {/* social Media Links */}
      <div className="flex justify-center mt-3">
        {/* more social media links here */}
      </div>
    </Card>
  );
}
