"use client";
import AdditionalInfoCard from "@/components/cards/additional.details.card";
import FollowerCard from "@/components/cards/followers.card";
import SummaryCard from "@/components/cards/summary.card";
import UserDetailCard from "@/components/cards/user.details.card";

// import BannerCard from "@/components/cards/banner.card";
import { useUsernameContext } from "../layout";

export default function Profile() {
  const { username } = useUsernameContext();

  return (
    <div className="flex flex-col md:flex-row p-10 bg-slate-200 gap-5">
      <div className="flex flex-1 gap-3 flex-col">
        <div className="">
          <UserDetailCard username={username} />
        </div>

        <div className="">
        <SummaryCard username={username} />
        </div>

        <div className="border border-black">Recent Hashtags</div>
      </div>

      <div className="flex flex-1 gap-3 flex-col ">
        <div className="">
          <FollowerCard username={username} />
        </div>
        <div className="">
          <AdditionalInfoCard username={username} />
        </div>
      </div>
    {/* <div>
      <BannerCard username={username} />
    </div> */}
  </div>
  );
}

 {/* <TweetCard username={"omarmhaimdat"} reply={true} limit={1} /> */}
