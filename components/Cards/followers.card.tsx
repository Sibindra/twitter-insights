// count section in profile

import { UserDataProps, getUserDetails } from "@/lib/userDetails";
import { BsFillPeopleFill, BsFillSuitHeartFill } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import { MdDonutSmall } from "react-icons/md";

export default async function FollowerCard({ username }: UserDataProps) {
  // const data = await getUserDetails({ username });
  const data = {
    creation_date: "Sun Dec 13 03:52:21 +0000 2009",
    user_id: "96479162",
    username: "omarmhaimdat",
    name: "Omar MHAIMDAT",
    follower_count: 961,
    following_count: 1185,
    favourites_count: 6101,
    is_private: false,
    is_verified: false,
    location: "Casablanca, Morocco",
    profile_pic_url:
      "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
    profile_banner_url:
      "https://pbs.twimg.com/profile_banners/96479162/1599303392",
    description:
      "Data Scientist | Software Engineer | Better programming and Heartbeat contributor",
    external_url: "https://www.linkedin.com/in/omarmhaimdat/",
    number_of_tweets: 3159,
    bot: false,
    timestamp: 1260676341,
    has_nft_avatar: false,
  };

  const followerCount = data.follower_count;
  const followingCount = data.following_count;
  const favouritesCount = data.follower_count;
  const tweetsCount = data.number_of_tweets;

  return (
    <div className=" flex flex-col gap-3  ">

      {/* followers count section */}
      <div className="flex border border-black bg-white p-3 gap-5">
        <div>
          <BsFillPeopleFill className=" h-10 w-10 " />
        </div>
        <div>
          <p className="text-slate-500 ">Followers</p>
          <p className="text-xl font-medium">{followerCount}</p>
        </div>
      </div>

      {/* following count section */}
      <div className="flex gap-5 border border-black bg-white p-3">
        <div>
          <MdDonutSmall className="h-10 w-10" />
        </div>
        <div>
          <p className=" text-slate-500 m">Following</p>
          <p className="text-xl font-medium"> {followingCount}</p>
        </div>
      </div>

      {/* facourites count section */}
      <div className=" flex border border-black bg-white p-3 gap-5">
        <div>
          <BsFillSuitHeartFill className="w-10 h-10" />
        </div>

        <div>
          <p className=" text-slate-500  ">Favourites</p>
          <p className=" text-xl font-medium">{favouritesCount}</p>
        </div>
      </div>

      {/* tweet count section */}
      <div className="flex gap-5 border border-black bg-white p-3">
        <div>
          <FaRetweet className="w-10 h-10" />
        </div>
        <div>
          <p className=" text-slate-500 font-medium ">tweets</p>
          <p className="text-xl  font-medium">{tweetsCount}</p>
        </div>
      </div>
    </div>
  );
}
