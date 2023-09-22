import AdditionalInfoCard from "@/components/Cards/additional.details.card";
import FollowerCard from "@/components/Cards/followers.card";
import SummaryCard from "@/components/Cards/summary.card";
import UserDetailCard from "@/components/Cards/user.details.card";

export default function Profile() {
  return (
    <div className="flex flex-col md:flex-row p-10 bg-slate-200 gap-5">
      <div className="flex flex-1 gap-3 flex-col">
        <div className="">
          <UserDetailCard username={"omarmhaimdat"} />
        </div>

        <div className="">
        <SummaryCard username={"omarmhaimdat"} />
        </div>

        <div className="border border-black">Recent Hashtags</div>
      </div>

      <div className="flex flex-1 gap-3 flex-col ">
        <div className="">
          <FollowerCard username={"omarmhaimdat"} />
        </div>
        <div className="">
          <AdditionalInfoCard username={"omarmhaimdat"} />
        </div>
      </div>
    </div>
  );
}

//  <TweetCard username={"omarmhaimdat"} reply={true} limit={1} />
