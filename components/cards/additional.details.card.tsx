// Additional information part in profile section
"use client"
import { UserDataProps, getUserDetails } from "@/lib/user-details";
import { useEffect, useState } from "react";

export default function BannerCard({ username }: UserDataProps) {
  const [userData, setUserData] = useState<UserDataProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserDetails({ username });
        setUserData(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("An error occurred while fetching data. Please try again later.");
      }
    };

    fetchData();
  }, [username]);

  if (error) {
    // error diplay code here (eg: error banenr or animation)
    return <p>Error: {error}</p>;
  }

  if (!userData) {
    // Loading section code here
    return <p>Loading...</p>;
  }

  const { user_id, creation_date,timestamp, is_private, has_nft_avatar,is_verified } = userData;
  


  return (
        <div className=" flex flex-col gap-1 bg-white ">
            <h1 className=" text-lg font-bold p-2 pl-10 mb-3">Additional Details</h1>

            {/* user ID */}
            <div className=" p-2 pl-10">
            <p className=" text-slate-500">User ID</p>
            <p className="text-xl font-medium">{user_id}</p>
            </div>
            
            {/* Creation date */}
            <div className=" p-2 pl-10">
            <p className=" text-slate-500">Joined Date</p>
            <p className="text-xl font-medium">{creation_date}</p>
            </div>
            
            {/* time stamp */}
            <div className=" p-2 pl-10">
            <p className=" text-slate-500">time stamp</p>
            <p className="text-xl font-mediuml">{timestamp}</p>
            </div>

            {/* Account privacy */}
            <div className=" p-2 pl-10">
            <p className=" text-slate-500">Account Privacy</p>
            <p className="text-xl font-medium">
            {is_private === true ? <span>Private</span> : <span>Public</span>}
              </p>
            </div>

            {/* Account verification */}
            <div className=" p-2 pl-10">
            <p className=" text-slate-500">Account Verification</p>
            <p className="text-xl font-medium">
            {is_verified === true ? <span>verified</span> : <span>Not verified</span>}
              </p>
            </div>

            {/* NFT avatar */}
            <div className=" p-2 pl-10">
            <p className=" text-slate-500">NFT Avatar</p>
            <p className="text-xl font-medium">
            {has_nft_avatar === true ? <span>Yes</span> : <span>No</span>}
              </p>
            </div>



        </div>
  );
}




// const data ={
//   "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
//   "user_id": "96479162",
//   "username": "omarmhaimdat",
//   "name": "Omar MHAIMDAT",
//   "follower_count": 961,
//   "following_count": 1185,
//   "favourites_count": 6101,
//   "is_private": false,
//   "is_verified": false,
//   "location": "Casablanca, Morocco",
//   "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
//   "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
//   "description": "Data Scientist | Software Engineer | Better programming and Heartbeat contributor",
//   "external_url": "https://www.linkedin.com/in/omarmhaimdat/",
//   "number_of_tweets": 3159,
//   "bot": false,
//   "timestamp": 1260676341,
//   "has_nft_avatar": false
// }
