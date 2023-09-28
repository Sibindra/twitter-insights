// Additional information part in profile section
"use client";
import { UserDataProps } from "@/lib/user-details";
import { BsFillCalendarDateFill, BsFillPeopleFill, BsFillPersonFill, BsHeartFill } from "react-icons/bs";
import { FaRetweet, FaRobot } from "react-icons/fa";
import { GiTimeBomb } from "react-icons/gi";
import {RiUserSharedFill, RiVerifiedBadgeFill} from "react-icons/ri"
import {MdPrivacyTip} from "react-icons/md"
import { BiSolidUser } from "react-icons/bi";

export default function BannerCard({
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
    <div className="flex flex-col  bg-slate-50 rounded">
      <h1 className="text-lg font-bold p-3 ">Additional Details</h1>

      {/* followers count */}
      {follower_count !== undefined && (
        <div className="flex p-3 gap-4 items-center">
          <BsFillPeopleFill size={20} className=" text-gray-500"/>
          <div >
          <p className="text-slate-500">Followers</p>
          <p className="text-xl font-medium">{follower_count}</p>
          </div>
        
        </div>
      )}

      {/* following count */}
      {following_count !== undefined && (
        <div className="flex p-3 gap-4 items-center">
          <RiUserSharedFill size={20} className=" text-gray-500"/> 
          <div >
          <p className="text-slate-500">Following</p>
          <p className="text-xl font-medium">{following_count}</p>
          </div>
        </div>
      )}

      {/* number of tweets */}
      {number_of_tweets !== undefined && (
        
        <div className="flex p-3 gap-4 items-center">
          <FaRetweet size={20} className=" text-gray-500"/>
         <div>
         <p className="text-slate-500">Tweets</p>
          <p className="text-xl font-medium">{number_of_tweets}</p>
         </div>
        </div>
      )}

      {/* favourites count */}
      {favourites_count !== undefined && (
        <div className="flex p-3 gap-4 items-center">
          <BsHeartFill size={20} className=" text-gray-500"/>
          <div>
          <p className="text-slate-500">Favourites</p>
          <p className="text-xl font-medium">{favourites_count}</p>
          </div>
        </div>
      )}

      {/* User ID */}
      {user_id !== undefined && (
        <div className="flex p-3 gap-4 items-center">
          <BiSolidUser size={20} className=" text-gray-500"/>
         <div>
         <p className="text-slate-500">User ID</p>
          <p className="text-xl font-medium">{user_id}</p>
         </div>
        </div>
      )}

      {/* Creation date */}
      {creation_date !== undefined && (
        <div className="flex p-3 gap-4 items-center">
          <BsFillCalendarDateFill size={20} className=" text-gray-500"/>
          <div>
          <p className="text-slate-500">Joined Date</p>
          <p className="text-xl font-medium">{creation_date}</p>
          </div>
        </div>
      )}

      {/* Time stamp */}
      {timestamp !== undefined && (
        <div className="flex p-3 gap-4 items-center">
          <GiTimeBomb size={20} className=" text-gray-500"/>
          <div>
          <p className="text-slate-500">Time Stamp</p>
          <p className="text-xl font-medium">{timestamp}</p>
          </div>
        </div>
      )}

      {/* Account privacy */}
      {is_private !== undefined && (
        <div className="flex p-3 gap-4 items-center">
          <MdPrivacyTip size={20} className=" text-gray-500"/>
          <div>
          <p className="text-slate-500">Account Privacy</p>
          <p className="text-xl font-medium">
            {is_private === true ? <span>Private</span> : <span>Public</span>}
          </p>
          </div>
        </div>
      )}

      {/* Account verification */}
      {follower_count !== undefined && (
        <div className="flex p-3 gap-4 items-center">
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
        </div>
      )}

      {/* NFT avatar */}
      {has_nft_avatar !== undefined && (
        <div className="flex p-3 gap-4 items-center">
          <FaRobot size={20} className=" text-gray-500"/>
         <div>
         <p className="text-slate-500">NFT Avatar</p>
          <p className="text-xl font-medium">
            {has_nft_avatar === true ? <span>Yes</span> : <span>No</span>}
          </p>
         </div>
        </div>
      )}
    </div>
  );
}
