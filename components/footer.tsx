"use client";

import React from "react";
import Link from "next/link";
import Container from "./ui/container";

export default function Footer() {
  return (
        <Container className="flex justify-center px-4">
          <div className="container px-6 ">
            <hr className="h-px bg-black dark:bg-white border-none mb-2" />

            <div className="flex flex-col items-center justify-between md:flex-row">
              <Link href="#" className="text-xs md:text-sm">
                2023 All Rights Reserved 
              </Link>

              <div className=" mt-4 md:m-0 hidden sm:flex">
                <div className="-mx-4">
                  <Link
                    href="https://github.com/Sibindra/insights-nepal"
                    className="px-2 md:px-4 text-xs md:text-sm transition-colors duration-300 hover:text-blue-500 hover:underline"
                  >
                    GITHUB
                  </Link>
                  
                  <Link
                    href="https://twitter.com/"
                    className="px-2 md:px-4 text-xs md:text-sm  transition-colors duration-300 hover:text-blue-500 hover:underline"
                  >
                    TWITTER
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
  );
}
