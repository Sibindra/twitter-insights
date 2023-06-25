"use client";
import Link from "next/link";
import heroimg from "../../public/images/hero-img.svg";
import Image from "next/image";

export const Hero = () => {
  return (
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
            {/* FIXME: */}
            <Link href={"https://github.com/Sibindra/insights-nepal"}>Github</Link>
          </p>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Unveil Patterns
            <br className="hidden md:block" />
            Through Data Visualization
            {/* <span className="inline-block text-deep-purple-accent-400">
            
            </span> */}
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Discover Trends and Unleash Insights with Engaging Data
            Visualizations from your Twitter Account.
          </p>

          <div className="flex items-center">
            <button className="hover:bg-[#cfc3fb]  hover:text-black text-black  px-3 py-1 border border-black rounded-none m-2 ">
              <Link href={"/dashboard"}>
              Login With Twitter
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
