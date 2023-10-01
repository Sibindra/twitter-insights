"use client";

import AdditionalInfoCard from "@/components/cards/additional-details.card";
import SummaryCard from "@/components/cards/summary.card";
import BannerCard from "@/components/cards/user-details.card";
import { UserDataProps, getUserDetails } from "@/lib/user-details";
import { useAppSelector } from "@/store/store";
import { useQuery } from "@tanstack/react-query";

export default function Profile() {
  const username = useAppSelector((state) => state.username.username);

  const {data , status} = useQuery<UserDataProps>({
    queryKey: ["user-details", username],
    queryFn: () => getUserDetails({username}),
  });

  if (status === "loading") {
    return <div>loading...</div>;
  }


  if (status === "error") {
    return <div>error</div>;
  }

  console.log(data)


  return (
    <div className="flex flex-col md:flex-row p-5 bg-white gap-10 ">
      <div className="flex flex-1 gap-3 flex-col ">
        <div className=" ">
          <BannerCard {...data} />
        </div>

        <div className="">
          <SummaryCard {...data} />
        </div>

        <div className="border rounded border-black">Recent Hashtags</div>
      </div>

      <div className="flex  flex-1 gap-3 flex-col ">
        <div className="">{/* RECENT FOLLOWES WAS HERE */}</div>
        <div className="">
          <AdditionalInfoCard {...data} />
        </div>
      </div>
    </div>
  );
}
