"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div>
        <footer className="flex justify-center px-4 text-gray-800">
          <div className="container px-6 py-6">

            <hr className="h-px bg-black border-none mt-12" />

            <div className="flex flex-col items-center justify-between md:flex-row">
              <Link href="#" className="text-sm">
                2023 All Rights Reserved Project II @NCIT
              </Link>

              <div className="flex mt-4 md:m-0">
                <div className="-mx-4">
                  <Link
                    href="#"
                    className="px-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
                  >
                    GITHUB
                  </Link>
                  <Link
                    href="#"
                    className="px-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
                  >
                    NCIT
                  </Link>
                  <Link
                    href="#"
                    className="px-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
                  >
                    TWITTER
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
