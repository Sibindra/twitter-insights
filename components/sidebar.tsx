'use client'
// TODO: need to chage with shadcn sidebar 

import { BiGridAlt, BiUser, BiCog, BiX } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import { useEffect, useState } from "react";
import Link from "next/link";



export default function Sidebar({username}:{username:string}) {

  const sidebarElements = [
    {
      name: "Dashboard",
      icon: <BiGridAlt className="w-6 h-6" />,
      link: `/dashboard/${username}`,
    },
    {
      name: "Profile",
      icon: <BiUser className="w-6 h-6" />,
      link: `/dashboard/${username}/profile`,
    },
    {
      name: "Contact Us",
      icon: <BiCog className="w-6 h-6" />,
      link: `/dashboard/${username}/form`,
    },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const checkScreen = () => {
    window.innerWidth < 640 ? setSidebarOpen(false) : setSidebarOpen(true);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const closeSidebar = () => {
    if (window.innerWidth < 640) {
      setSidebarOpen(false);
    }
  };

  return (
    <aside>
      <div className="flex flex-col justify-between h-screen dark:bg-stone-900">
        <div className="flex flex-col">
          <div className="flex justify-between items-center p-4">
            <div className="md:hidden">
              <button onClick={toggleSidebar}>
                {sidebarOpen ? (
                  <BiX className="w-6 h-6" />
                ) : (
                  <HiMenuAlt2 className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
          <div
            className={`${
              sidebarOpen ? "block" : "hidden"
            } md:block md:overflow-y-auto`}
          >
            <ul className="flex flex-col items-center">
              {sidebarElements.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center py-2 px-7 w-full dark:hover:bg-stone-800 hover:bg-gray-100 cursor-pointer"
                >
                  <Link
                    href={item.link}
                    onClick={closeSidebar}
                    className="flex items-center border-red-500 border"
                  >
                    {item.icon}
                    <span className="mx-4">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
