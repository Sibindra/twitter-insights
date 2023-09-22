import AdditionalInfoCard from "@/components/Cards/additional.details.card";
import FollowerCard from "@/components/Cards/followers.card";
import UserDetailCard from "@/components/Cards/user.details.card";

export default function Profile() {
  return (
    <div className="flex p-10 bg-slate-50 gap-5">
      <div className="flex flex-1 gap-3 flex-col">
        <div className="border border-black">
          <UserDetailCard username={"omarmhaimdat"} />
        </div>

        <div className="border border-black">Summary</div>

        <div className="border border-black">Recent Hashtags</div>
      </div>

      <div className="flex flex-1 gap-3 flex-col ">
        <div className="border border-black">
          <FollowerCard username={"omarmhaimdat"} />
        </div>
        <div className="border border-black">
          <AdditionalInfoCard username={"omarmhaimdat"} />
        </div>
      </div>
    </div>
  );
}

//  <TweetCard username={"omarmhaimdat"} reply={true} limit={1} />
