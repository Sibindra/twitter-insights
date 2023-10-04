"use client";
import AdditionalInfoCard from "@/components/cards/additional-details.card";
import BannerCard from "@/components/cards/banner.card";
import { UserDataProps, getUserDetails } from "@/lib/user-details";
import { useAppSelector } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import RecentFollowers from "@/components/cards/followers.card";

export default function Profile() {
  const username = useAppSelector((state) => state.username.username);
  // const [userDetailsLoaded, setUserDetailsLoaded] = useState<boolean>(false);


  const {data , status} = useQuery<UserDataProps>({
    queryKey: ["user-details", username],
    queryFn: async() => await getUserDetails({username}),
  });

  const user_id = data?.user_id as number;


  // // logic to wait 3 secs before loading followers
  // useEffect(() => {
  //   if (user_id && !userDetailsLoaded) {
  //     const delayTime = 3000;

  //     setTimeout(() => {
  //       setUserDetailsLoaded(true);
  //     }, delayTime);
  //   }
  // }, [user_id, userDetailsLoaded]);

  // const { data: followersData } = useQuery({
  //   queryKey: ["followers", user_id],
  //   queryFn: async () => await getUsersFollowers({ user_id: user_id, limit: 1 }),
  //   enabled: userDetailsLoaded, // Enable the query only when userDetailsLoaded is true
  // });



  // console.log('followers',followersData)

  if (status === "loading") {
    return <div>loading...</div>;
  }


  if (status === "error") {
    return <div>error</div>;
  }



  return (
    <div className="flex flex-col md:flex-row p-5 bg-white gap-10 ">
      <div className="flex flex-1 gap-2 flex-col ">
        <div className="">
          {/* <BannerCard {...data} /> */}
        </div>

        {/* <div className="">
          <SummaryCard {...data} />
        </div> */}

        {/* <div className="border rounded border-black">
        </div> */}
      </div>

      <div className="flex  flex-1 gap-1 flex-col ">
        <div className="">{/* RECENT FOLLOWES WAS HERE */}
        {/* <RecentFollowers user_id={user_id} limit={3}/> */}
        
        </div>
        <div className="">
          {/* <AdditionalInfoCard {...data} /> */}
        </div>
      </div>
    </div>
  );
}


  // const followersData = {
  //   results: [
  //     {
  //       "creation_date": "Thu Dec 02 01:16:05 +0000 2010",
  //       "user_id": "221938964",
  //       "username": "an_open_mind",
  //       "name": "Jerome Pesenti",
  //       "follower_count": 17162,
  //       "following_count": 266,
  //       "is_private": false,
  //       "is_verified": false,
  //       "location": "New York, USA",
  //       "profile_pic_url": "https://pbs.twimg.com/profile_images/1472230681367433221/1Tyym0wX_normal.jpg",
  //       "description": "VP of AI @ Meta @MetaAI",
  //       "external_url": "http://facebook.ai",
  //       "number_of_tweets": 520,
  //       "bot": false,
  //       "timestamp": 1291252565
  //     },
  //     {
  //       "creation_date": "Tue May 07 19:44:59 +0000 2019",
  //       "user_id": "1125849026308575239",
  //       "username": "BlancheMinerva",
  //       "name": "Stella Rose Biderman",
  //       "follower_count": 3446,
  //       "following_count": 578,
  //       "is_private": false,
  //       "is_verified": false,
  //       "location": "",
  //       "profile_pic_url": "https://pbs.twimg.com/profile_images/1452862756655357955/4RQeg_aM_normal.jpg",
  //       "description": "Mathematician, AI researcher, Magic the Gathering player.\nNLP researcher at @BoozAllen and #EleutherAI.\nMy employer disowns my tweets.\nShe/her",
  //       "external_url": "http://www.stellabiderman.com",
  //       "number_of_tweets": 5886,
  //       "bot": false,
  //       "timestamp": 1557258299
  //     },
  //     {
  //       "creation_date": "Fri Mar 18 15:42:31 +0000 2022",
  //       "user_id": "1504845539468263451",
  //       "username": "AdeptAILabs",
  //       "name": "Adept",
  //       "follower_count": 6360,
  //       "following_count": 8,
  //       "is_private": false,
  //       "is_verified": false,
  //       "location": "",
  //       "profile_pic_url": "https://pbs.twimg.com/profile_images/1519001110916214784/8ehwafsO_normal.jpg",
  //       "description": "Useful general intelligence. We also hang out with a few dogs!",
  //       "external_url": "https://www.adept.ai/",
  //       "number_of_tweets": 10,
  //       "bot": false,
  //       "timestamp": 1647618151
  //     },
  //   ]
  // }