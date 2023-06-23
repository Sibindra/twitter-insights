"use client";
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

        <div
          style={{ maxWidth: "100%", height: "auto" }}
          className="hidden md:block"
        >
          <Image
            src={heroimg}
            alt="Image not found"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs tracking-wider text-black border-2 uppercase rounded-none bg-[#a4fcf5]">
            Brand new
          </p>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Everything you
            <br className="hidden md:block" />
            can imagine{" "}
            <span className="inline-block text-deep-purple-accent-400">
              is real
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>

          <div className="flex items-center">
            <button className="hover:bg-[#cfc3fb]  hover:text-black text-black  px-3 py-1 border border-black rounded-none m-2 ">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
