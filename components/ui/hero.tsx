"use client";
import heroimg from "@/public/images/hero-img.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import Typewriter from "typewriter-effect";

import { setStoreUsername } from "@/store/features/username-slice";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Input } from "./input";
import { Button } from "./button";

export const Hero = () => {
  const [username, setUsername] = useState<string>("");
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSearch = () => {
    dispatch(setStoreUsername(username));

    router.push("/dashboard");
  };

  return (
    <div id="hero">
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 border-2">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>

          <div className="hidden lg:block ">
            <div className="max-w-full">
              <Image
                src={heroimg}
                alt="Image not found"
                fill
                style={{ objectFit: "contain" }}
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs tracking-wider text-black border-2 uppercase rounded-none bg-[#a4fcf5]">
              <Link
                target="_blank"
                href={"https://github.com/Sibindra/insights-nepal"}
              >
                Github
              </Link>
            </p>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Unveil Patterns
              <br className="hidden md:block" />
              Through Data Visualization
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              {isMounted && (
                <Typewriter
                  options={{
                    strings: [
                      "Real-Time Trends",
                      "Advanced Sentiment Analysis",
                      "Engagement Metrics Tracking",
                      "Hashtag Analysis Tools",
                      "Competitor Performance Insights",
                      "Discover Top Performing Tweets",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: "natural",
                    delay: 50,
                  }}
                />
              )}
            </p>

            <div className="flex flex-col sm:flex-row items-center">
              <div className="relative w-full">
                <label
                  htmlFor="username"
                  className="hidden mb-2 text-sm font-medium text-gray-900 "
                >
                  username
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <FiUser className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>

                <div className="flex">
                  {/* USERNAME HERE */}
                <Input
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 border border-black rounded-none"
                  placeholder="Enter the username without @"
                  type="username"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                />

                {/* SEND BUTTON HERE  */}
                <Button className=" rounded-none" onClick={handleSearch}>
                  <Link href="#">
                    <div className="flex items-center">
                      <BsSearch className="mr-2" size={18} />
                      Search
                    </div>
                  </Link>
                </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
