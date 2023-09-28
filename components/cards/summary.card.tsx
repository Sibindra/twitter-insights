// summary section in profile page
"use client"
import { UserDataProps } from "@/lib/user-details";

export default function BannerCard({ description }: UserDataProps) {

  return (
    <div className="flex flex-col rounded bg-slate-50 p-5">
      <h1 className="text-lg font-bold mb-3">Summary</h1>
      {description ? (
        <p className="">{description}</p>
      ) : (
        <p className="text-slate-500">No summary available</p>
      )}
    </div>
  );
}
