"use client";
import logo from "@/app/logo.svg";
import Image from "next/image";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className=" bg-white">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 ">
          {/* logo */}
          <div className="flex items-center justify-between ">
            <Image
              src={logo}
              width={30}
              height={30}
              alt="not found"
              className="rounded-none"
            />
            <p className="text-lg px-2 font-semibold">INSIGHTS NEPAL</p>
          </div>

          <div className="hidden md:flex md:items-center md:justify-end flex-grow ">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-md">
                <li>
                  <Link
                    activeClass="active"
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-black transition cursor-pointer"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                   activeClass="active"
                   to="feature"
                   spy={true}
                   smooth={true}
                   offset={-70}
                   duration={500}
                   className="text-black transition cursor-pointer"
                  >
                    Features
                  </Link>
                </li>

                <li>
                  <Link
                    activeClass="active"
                    to="team"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-black transition cursor-pointer"
                  >
                    Team
                  </Link>
                </li>

                <li>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-black transition cursor-pointer"
                  >
                    contact us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* <div className="sm:flex sm:gap-4">
               <button className="hover:bg-[#cfc3fb] hover:text-black text-black px-3 py-1 border border-black rounded-none m-2 hidden md:block">
                <Link to="" href={"/dashboard"}>
                  Login With Twitter
                </Link>
              </button> 
            </div> */}

            <button
              className="hover:bg-[#cfc3fb] hover:text-black text-black px-1 py-1 rounded-none m-2 md:hidden"
              onClick={toggleMenu}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="bg-white px-4 py-2 md:hidden">
            <ul className="flex flex-col gap-2 text-md border-t-2 animate-fadeIn">
              <li>
                <Link
                  activeClass="active"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black transition cursor-pointer"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  activeClass="active"
                  to="feature"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black transition cursor-pointer"
                >
                  Feature
                </Link>
              </li>

              <li>
                <Link
                  activeClass="active"
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black transition cursor-pointer"
                >
                  Team
                </Link>
              </li>

              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black transition cursor-pointer"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
