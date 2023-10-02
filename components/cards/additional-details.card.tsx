// Additional information part in profile section
"use client";
import { UserDataProps } from "@/lib/user-details";
import { BsFillCalendarDateFill, BsFillPeopleFill, BsFillPersonFill, BsHeartFill } from "react-icons/bs";
import { FaRetweet, FaRobot } from "react-icons/fa";
import { GiTimeBomb } from "react-icons/gi";
import {RiUserSharedFill, RiVerifiedBadgeFill} from "react-icons/ri"
import {MdPrivacyTip} from "react-icons/md"
import { BiSolidUser } from "react-icons/bi";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

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
  return (
    <Card>
      <CardHeader>
        <CardTitle>
        Additional Details
        </CardTitle>
      </CardHeader>

      {/* followers count */}
      {follower_count !== undefined && (
        <CardContent className="flex gap-4 items-center">
          <BsFillPeopleFill size={20} className=" text-gray-500"/>
          <div >
          <p className="text-slate-500">Followers</p>
          <p className="text-xl font-medium">{follower_count}</p>
          </div>
        
        </CardContent>
      )}

      {/* following count */}
      {following_count !== undefined && (
        <CardContent className="flex  gap-4 items-center">
          <RiUserSharedFill size={20} className=" text-gray-500"/> 
          <div >
          <p className="text-slate-500">Following</p>
          <p className="text-xl font-medium">{following_count}</p>
          </div>
        </CardContent>
      )}

      {/* number of tweets */}
      {number_of_tweets !== undefined && (
        
        <CardContent className="flex gap-4 items-center">
          <FaRetweet size={20} className=" text-gray-500"/>
         <div>
         <p className="text-slate-500">Tweets</p>
          <p className="text-xl font-medium">{number_of_tweets}</p>
         </div>
        </CardContent>
      )}

      {/* favourites count */}
      {favourites_count !== undefined && (
        <CardContent className="flex  gap-4 items-center">
          <BsHeartFill size={20} className=" text-gray-500"/>
          <div>
          <p className="text-slate-500">Favourites</p>
          <p className="text-xl font-medium">{favourites_count}</p>
          </div>
        </CardContent>
      )}

      {/* User ID */}
      {user_id !== undefined && (
        <CardContent className="flex gap-4 items-center">
          <BiSolidUser size={20} className=" text-gray-500"/>
         <div>
         <p className="text-slate-500">User ID</p>
          <p className="text-xl font-medium">{user_id}</p>
         </div>
        </CardContent>
      )}

      {/* Creation date */}
      {creation_date !== undefined && (
        <CardContent className="flex gap-4 items-center">
          <BsFillCalendarDateFill size={20} className=" text-gray-500"/>
          <div>
          <p className="text-slate-500">Joined Date</p>
          <p className="text-xl font-medium">{creation_date}</p>
          </div>
        </CardContent>
      )}

      {/* Time stamp */}
      {timestamp !== undefined && (
        <CardContent className="flex gap-4 items-center">
          <GiTimeBomb size={20} className=" text-gray-500"/>
          <div>
          <p className="text-slate-500">Time Stamp</p>
          <p className="text-xl font-medium">{timestamp}</p>
          </div>
        </CardContent>
      )}

      {/* Account privacy */}
      {is_private !== undefined && (
        <CardContent className="flex gap-4 items-center">
          <MdPrivacyTip size={20} className=" text-gray-500"/>
          <div>
          <p className="text-slate-500">Account Privacy</p>
          <p className="text-xl font-medium">
            {is_private === true ? <span>Private</span> : <span>Public</span>}
          </p>
          </div>
        </CardContent>
      )}

      {/* Account verification */}
      {follower_count !== undefined && (
        <CardContent className="flex gap-4 items-center">
          <RiVerifiedBadgeFill size={20} className=" text-gray-500"/>
         <div>
         <p className="text-slate-500">Account Verification</p>
          <p className="text-xl font-medium">
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
          <FaRobot size={20} className=" text-gray-500"/>
         <div>
         <p className="text-slate-500">NFT Avatar</p>
          <p className="text-xl font-medium">
            {has_nft_avatar === true ? <span>Yes</span> : <span>No</span>}
          </p>
         </div>
        </CardContent>
      )}
    </Card>
  );
}
