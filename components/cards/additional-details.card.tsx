// Additional information part in profile section
"use client";
import { UserDataProps } from "@/lib/api-calls/user-details";
import {
  BsFillCalendarDateFill,
  BsFillPeopleFill,
  BsFillPersonFill,
  BsHeartFill,
} from "react-icons/bs";
import { FaRetweet, FaRobot } from "react-icons/fa";
import { GiTimeBomb } from "react-icons/gi";
import { RiUserSharedFill, RiVerifiedBadgeFill } from "react-icons/ri";
import { MdPrivacyTip } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function AdditionalInfoCard({
  follower_count,
  following_count,
  number_of_tweets,
  favourites_count,
  user_id,
  timestamp,
  creation_date,
  has_nft_avatar,
  is_private,
  is_verified,
}: UserDataProps) {
  const iconSize = 20;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Additional Details</CardTitle>
        <CardDescription>additional details about the user</CardDescription>
      </CardHeader>

      {/* followers count */}
      {follower_count !== undefined && (
        <CardContent className="flex gap-4 items-center">
          <BsFillPeopleFill size={iconSize} className=" text-gray-600" />
          <div>
            <p className="text-slate-500">Followers</p>
            <p className="text-md font-medium">
              {follower_count.toLocaleString()}
            </p>
          </div>
        </CardContent>
      )}

      {/* following count */}
      {following_count !== undefined && (
        <CardContent className="flex  gap-4 items-center">
          <RiUserSharedFill size={iconSize} className=" text-gray-600" />
          <div>
            <p className="text-slate-500">Following</p>
            <p className="text-md font-medium">
              {following_count.toLocaleString()}
            </p>
          </div>
        </CardContent>
      )}

      {/* number of tweets */}
      {number_of_tweets !== undefined && (
        <CardContent className="flex gap-4 items-center">
          <FaRetweet size={iconSize} className=" text-gray-600" />
          <div>
            <p className="text-slate-500">Tweets</p>
            <p className="text-md font-medium">{number_of_tweets}</p>
          </div>
        </CardContent>
      )}

      {/* favourites count */}
      {favourites_count !== undefined && (
        <CardContent className="flex  gap-4 items-center">
          <BsHeartFill size={iconSize} className=" text-gray-600" />
          <div>
            <p className="text-slate-500">Favourites</p>
            <p className="text-md font-medium">
              {favourites_count.toLocaleString()}
            </p>
          </div>
        </CardContent>
      )}

      {/* User ID */}
      {user_id !== undefined && (
        <CardContent className="flex gap-4 items-center">
          <BiSolidUser size={iconSize} className=" text-gray-600" />
          <div>
            <p className="text-slate-500">User ID</p>
            <p className="text-md font-medium">{user_id}</p>
          </div>
        </CardContent>
      )}

      {/* Creation date */}
      {creation_date !== undefined && (
        <CardContent className="flex gap-4 items-center">
          <BsFillCalendarDateFill size={iconSize} className="text-gray-600" />
          <div>
            <p className="text-slate-500">Joined Date</p>
            <p className="text-md font-medium">
              {(() => {
                const dateObj = new Date(creation_date);
                const year = dateObj.getFullYear();
                const month = dateObj.getMonth() + 1; // Months are 0-based, so add 1
                const day = dateObj.getDate();

                // Format the date as desired (e.g., "YYYY-MM-DD")
                const formattedDate = `${year}-${month
                  .toString()
                  .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

                return formattedDate;
              })()}
            </p>
          </div>
        </CardContent>
      )}

      {/* Time stamp */}
      {timestamp !== undefined && (
        <CardContent className="flex gap-4 items-center">
          <GiTimeBomb size={iconSize} className=" text-gray-600" />
          <div>
            <p className="text-slate-500">Time Stamp</p>
            <p className="text-md font-medium">{timestamp}</p>
          </div>
        </CardContent>
      )}

      {/* Account privacy */}
      {is_private !== undefined && (
        <CardContent className="flex gap-4 items-center">
          <MdPrivacyTip size={iconSize} className=" text-gray-600" />
          <div>
            <p className="text-slate-500">Account Privacy</p>
            <p className="text-md font-medium">
              {is_private === true ? <span>Private</span> : <span>Public</span>}
            </p>
          </div>
        </CardContent>
      )}

      {/* Account verification */}
      {follower_count !== undefined && (
        <CardContent className="flex gap-4 items-center">
          <RiVerifiedBadgeFill size={iconSize} className=" text-gray-600" />
          <div>
            <p className="text-slate-500">Account Verification</p>
            <p className="text-md font-medium">
              {follower_count >= 500000 ? (
                <span> Verified</span>
              ) : (
                <span>Not Verified</span>
              )}
            </p>
          </div>
        </CardContent>
      )}

      {/* NFT avatar */}
      {has_nft_avatar !== undefined && (
        <CardContent className="flex gap-4 items-center">
          <FaRobot size={iconSize} className=" text-gray-600" />
          <div>
            <p className="text-slate-500">NFT Avatar</p>
            <p className="text-md font-medium">
              {has_nft_avatar === true ? <span>Yes</span> : <span>No</span>}
            </p>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
