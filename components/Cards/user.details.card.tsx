import { UserDataProps, getUserDetails } from "@/lib/userDetails";
import Image from "next/image";

export default async function UserDetailCard({ username }: UserDataProps) {
  const data = await getUserDetails({ username });

  const name = data.name;
  const creation_data = data.creation_date;
  const img = data.profile_pic_url;
  const location =data.location

  return (
    <>
   <div className="w-3/5 h-1/2 flex border-4  border-black m-1">
      <div className="flex border-red justify-center w-1/2">
        <div>
           <Image
            src={img}
            alt="User Image"
            width={100}
            height={100}
            className="rounded-full"
          /> 
          image
        </div>
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p>Username: {username}</p>
        <p></p>
        <p>Creation Date: {creation_data}</p>
        <p>location: {location}</p>
      </div>
    </div>
    
    </>
  );
}


// sample data:
// {
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
