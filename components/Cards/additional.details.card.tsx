// Additional information part in profile section
import { UserDataProps, getUserDetails } from "@/lib/userDetails";



export default async function AdditionalInfoCard({ username }: UserDataProps) {
  // const data = await getUserDetails({ username });
  const data ={
    "creation_date": "Sun Dec 13 03:52:21 +0000 2009",
    "user_id": "96479162",
    "username": "omarmhaimdat",
    "name": "Omar MHAIMDAT",
    "follower_count": 961,
    "following_count": 1185,
    "favourites_count": 6101,
    "is_private": false,
    "is_verified": false,
    "location": "Casablanca, Morocco",
    "profile_pic_url": "https://pbs.twimg.com/profile_images/1271521722945110016/AvKfKpLo_normal.jpg",
    "profile_banner_url": "https://pbs.twimg.com/profile_banners/96479162/1599303392",
    "description": "Data Scientist | Software Engineer | Better programming and Heartbeat contributor",
    "external_url": "https://www.linkedin.com/in/omarmhaimdat/",
    "number_of_tweets": 3159,
    "bot": false,
    "timestamp": 1260676341,
    "has_nft_avatar": false
  }
 
  const userID = data.user_id
  const creationDate = data.creation_date
  const timeStamp = data.timestamp





  return (
        <div className=" flex flex-col gap-1">
            <h1 className=" text-lg font-bold p-3 mb-3">Additional Details</h1>

            <div className=" p-2">
            <p className=" text-slate-500">User ID date</p>
            <p className="text-xl font-medium">{userID}</p>
            </div>
            
            <div className=" p-2">
            <p className=" text-slate-500">Joined Date</p>
            <p className="text-xl font-medium">{creationDate}</p>
            </div>
            
            <div className=" p-2">
            <p className=" text-slate-500">time stamp</p>
            <p className="text-xl font-normal">{timeStamp}</p>
            </div>
        </div>
  );
}