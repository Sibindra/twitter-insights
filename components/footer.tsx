"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div>
        <div className="flex justify-center px-4 text-gray-800">
          <div className="container px-6 py-6">
            <hr className="h-px bg-black border-none mt-12 mb-2" />

            <div className="flex flex-col items-center justify-between md:flex-row">
              <Link href="#" className="text-xs md:text-sm">
                2023 All Rights Reserved Project II @NCIT
              </Link>

              <div className=" mt-4 md:m-0 hidden sm:flex">
                <div className="-mx-4">
                  <Link
                    href="https://github.com/Sibindra/insights-nepal"
                    className="px-2 md:px-4 text-xs md:text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
                  >
                    GITHUB
                  </Link>
                  <Link
                    href="https://ncit.edu.np/"
                    className="px-2 md:px-4 text-xs md:text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
                  >
                    NCIT
                  </Link>
                  <Link
                    href="https://twitter.com/"
                    className="px-2 md:px-4 text-xs md:text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
                  >
                    TWITTER
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
