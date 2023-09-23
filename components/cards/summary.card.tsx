// summary section in profile page
import { UserDataProps, getUserDetails } from "@/lib/user-details";

export default async function SummaryCard({ username }: UserDataProps) {
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

  const description = data.description

  return(
    <div className="flex flex-col bg-white p-5">
        <h1 className=" text-lg font-bold mb-3">Summary</h1>
        {description}
    </div>
  );
}