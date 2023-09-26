// count section in profile
"use client"
import { UserDataProps } from "@/lib/user-details";
import { BsFillPeopleFill, BsFillSuitHeartFill } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import { MdDonutSmall } from "react-icons/md";

export default function BannerCard({ follower_count, following_count, favourites_count, number_of_tweets }: UserDataProps) {
 
  return (
    <div className="flex flex-col gap-2">

      {/* followers count section */}
      {follower_count !== undefined && (
        <div className="flex bg-slate-200 p-3 gap-5 items-center">
          <div>
            <BsFillPeopleFill size={35} className="text-gray-600" />
          </div>
          <div>
            <p className="text-slate-500">Followers</p>
            <p className="text-xl font-medium">{follower_count}</p>
          </div>
        </div>
      )}

      {/* following count section */}
      {following_count !== undefined && (
        <div className="flex gap-5 bg-slate-200 p-3 items-center">
          <div>
            <MdDonutSmall size={35} className=" text-gray-600 " />
          </div>
          <div>
            <p className="text-slate-500">Following</p>
            <p className="text-xl font-medium">{following_count}</p>
          </div>
        </div>
      )}

      {/* favorites count section */}
      {favourites_count !== undefined && (
        <div className="flex  bg-slate-200	 p-3 gap-5 items-center">
          <div>
            <BsFillSuitHeartFill size={35} className="text-gray-600" />
          </div>
          <div>
            <p className="text-slate-500 ">Favourites</p>
            <p className="text-xl font-medium">{favourites_count}</p>
          </div>
        </div>
      )}

      {/* tweet count section */}
      {number_of_tweets !== undefined && (
        <div className="flex gap-5 items-center bg-slate-200 p-3">
          <div>
            <FaRetweet size={35} className="text-gray-600" />
          </div>
          <div>
            <p className="text-slate-500">Tweets</p>
            <p className="text-xl font-medium">{number_of_tweets}</p>
          </div>
        </div>
      )}
    </div>
  );
}
