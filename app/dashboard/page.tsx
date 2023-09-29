"use client";

import { useAppSelector } from "@/store/store";
export default function Dashboard() {
  const username = useAppSelector((state) => state.username.username);

  
  return (
    <>
      <div className="flex  flex-col p-10 border border-black bg-white gap-10">
        <div className="flex gap-3  border border-black p-5">
          <div className="flex flex-1 border border-black">
            </div>

          <div className="flex flex-1 border border-black">2-graph</div>

          <div className="flex flex-1 border border-black">3-graph</div>
        </div>

        <div className="flex gap-3 border border-black bg-slate-100">
        </div>

        <div className="flex gap-3  border border-black p-5">
          <div className="flex flex-1 border border-black">graph-5</div>
          <div className="flex flex-1 border border-black">graph-6</div>
        </div>
      </div>

    </>
  );
}
