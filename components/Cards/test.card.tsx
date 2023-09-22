// user details 

import { UserDataProps, getUserDetails } from "@/lib/userDetails";

export default async function TestCard({ username }: UserDataProps) {
  const data = await getUserDetails({ username });

  const name = data.name;
  const creation_data = data.creation_date;
  const a = data.follower_count
  const img = data.profile_pic_url
  const follower_count = data.follower_count;
  const following_count = data.following_count;

  return (
    <main className="border-black border m-3 flex flex-col">
      <p>Name: {name}</p>
      <p>Creation Date: {creation_data}</p>
      <p>Follower: {follower_count}</p>
      <p>Following: {following_count}</p>

      {a}

      <img src={img}></img>
    </main>
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
