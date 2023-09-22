// user Details in profile section
import { UserDataProps, getUserDetails } from "@/lib/userDetails";
import Image from "next/image"; 
import { MdLocationOn } from 'react-icons/md';


export default async function UserDetailCard({ username }: UserDataProps) {
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
 

  const name = data.name;
  const profileImage = "https://images.unsplash.com/photo-1535970589542-8d1203825ef6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
  const location = data.location;
  const profilebanner = data.profile_banner_url;

  return (
    <div className=" flex flex-col bg-white">
      {/* Banner */}
      <div className="flex  ">
        <Image
          src={profilebanner}
          alt="Profile Banner"
          layout="responsive"
          width={200}
          height={100}
          className="w-full"
        />
      </div>

      {/* profile image and user details */}
      <div className="flex  justify-around ">
        {/* profile image */}
        <div className="flex -mt-14">
          <Image
            src={profileImage}
            alt="User Image"
            width={100}
            height={100}
            className="rounded-full h-2/3  "
          />
        </div>

        {/* user details */}
        <div className=" flex flex-col justify-center items-center py-3  ">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="text-slate-500"> {username}</p>
          <p className="flex bg-slate-200 p-1 "> <MdLocationOn className="w-5 h-5 "/> {location} </p>
        </div>
      </div>

      {/* social media links */}
      <div className="flex  ">
      <a href="https://www.linkedin.com/in/omarmhaimdat/">Linkedin</a>
      </div>
    </div>
  );
}

// sample data:

 