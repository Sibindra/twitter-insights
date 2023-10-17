"use client";

import CubeAnimation from "@/components/animations/cube.animation";
import ModeToggle from "@/components/toggle-theme";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

const frequestUsernames = ["@elonmusk", "@iamsrk", "@brb1914", "@imVkohli"];

export default function Home() {
  return (
    <main className="relative bg-[#F7F7F7] dark:bg-[#121212]">
      <div className="absolute top-5 left-10">
        <ModeToggle />
      </div>

      <section className=" h-screen flex items-center justify-center">
        <div className="w-full flex items-center justify-center flex-col gap-10">
          <div className="flex flex-col gap-3 text-center">
            {/* header text */}
            <h1 className=" text-6xl font-extrabold">Insights </h1>
            <p>unveil patterns through data visualizations ....</p>

          </div>

          <div className="center flex justify-center w-full p-4  gap-5  ">
            <Input
              type="text "
              placeholder="enter username without @"
              className=" w-5/6 p-4"
            />
            <Button className=" border border-black">Search</Button>
          </div>

          <div className="frequents flex flex-col items-center justify-center gap-5">
            Checkout our most frequent searches :
            <div className="flex gap-3 justify-center flex-wrap">
              {frequestUsernames.map((username, index) => (
                <Badge
                  key={index}
                  variant={"outline"}
                  className=" rounded-sm cursor-pointer hover:bg-secondary hover:text-secondary-foreground "
                >
                  {username}{" "}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* down arrow  */}
      <div className="absolute bottom-5 right-10 flex flex-col justify-center items-center gap-3 ">
        <BsFillArrowDownSquareFill
          size={30}
          className="cursor-pointer "
        />
      </div>
    </main>
  );
}
