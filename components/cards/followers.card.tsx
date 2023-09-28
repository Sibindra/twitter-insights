import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";

export default function RecentFollowersCard() {
  const data = {
    creation_date: "Sat Apr 23 03:41:42 +0000 2022",
    user_id: "1517710185594249217",
    username: "papapap51261616",
    name: "papa papa",
    follower_count: 4,
    following_count: 43,
    is_private: false,
    is_verified: false,
    location: "",
    profile_pic_url:
      "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
    description: "Tout",
  };

  const data2 = {
    creation_date: "Tue Jan 31 20:38:03 +0000 2017",
    user_id: "826530001939992576",
    username: "uic_hackathon",
    name: "UIC-HACKATHON",
    follower_count: 0,
    following_count: 1,
    is_private: true,
    is_verified: false,
    location: "",
    profile_pic_url:
      "https://pbs.twimg.com/profile_images/826530899139362816/yhBVWhvQ_normal.jpg",
    description: "hello",
    external_url: null,
    number_of_tweets: 0,
    bot: false,
    timestamp: 1485895083,
  };

  const data3 = {
    creation_date: "Fri Nov 05 14:45:18 +0000 2021",
    user_id: "1456633636208402432",
    username: "ImagesCv",
    name: "images.cv",
    follower_count: 1047,
    following_count: 4981,
    is_private: false,
    is_verified: false,
    location: "",
    profile_pic_url:
      "https://pbs.twimg.com/profile_images/1462178000460521474/dnBuZaeJ_normal.jpg",
    description: "Tweets about Computer Vision",
    external_url: "http://linktr.ee/imagescv",
    number_of_tweets: 713,
    bot: false,
    timestamp: 1636123518,
  };
  return (
    <Card >
      <CardHeader>
        <CardTitle>Recent Followers</CardTitle>
      </CardHeader>

      {/* recent followers 1 */}
      <CardContent>
        <div className="flex gap-5 ">
          {/* profile image */}
          <div className="flex ">
            {data.profile_pic_url && ( // Check if profile_pic_url is defined
              <Image
                src={data.profile_pic_url}
                alt="User Image"
                width={50}
                height={50}
                className=" rounded-full "
              />
            )}
          </div>
          <div>
            <h1 className="flex text-lg font-bold ">{data.name}</h1>
            <CardDescription>{data.description}</CardDescription>
          </div>
        </div>
      </CardContent>

      {/* recent followers 2 */}
      <CardContent>
        <div className="flex gap-5 ">
          {/* profile image */}
          <div className="flex ">
            {data2.profile_pic_url && ( // Check if profile_pic_url is defined
              <Image
                src={data2.profile_pic_url}
                alt="User Image"
                width={50}
                height={50}
                className=" rounded-full "
              />
            )}
          </div>
          <div>
            <h1 className="flex text-lg font-bold  ">{data2.name}</h1>
            <CardDescription>{data2.description}</CardDescription>
          </div>
        </div>
      </CardContent>

      {/* recent followers 3 */}
      <CardContent>
        <div className="flex gap-5 ">
          {/* profile image */}
          <div className="flex ">
            {data3.profile_pic_url && ( // Check if profile_pic_url is defined
              <Image
                src={data3.profile_pic_url}
                alt="User Image"
                width={50}
                height={50}
                className=" rounded-full "
              />
            )}
          </div>
          <div>
            <h1 className="flex text-lg font-bold ">{data3.name}</h1>
            <CardDescription>{data3.description}</CardDescription>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
