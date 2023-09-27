"use client";
import { BiGridAlt, BiUser, BiCog } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  // sidebar state for mobile screens
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className=" bg-slate-50">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm rounded-none-none sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-20"
        onClick={toggleSidebar}
      >
        <span className="sr-only">Toggle menu</span>
        <HiMenuAlt2 className="w-6 h-6" />
      </button>

      {sidebarOpen && (
        <aside
          id="default-sidebar"
          className="h-screen"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-5">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  href="/dashboard"
                  className="flex items-center p-2 rounded-none-lg hover:border-black hover:border"
                >
                  <BiGridAlt className="w-6 h-6 transition duration-75 group-hover:" />
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/profile"
                  className="flex items-center p-2 rounded-none-lg hover:border-black hover:border"
                >
                  <BiUser className="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:" />
                  <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center p-2 rounded-none-lg hover:border-black hover:border"
                >
                  <BiCog className="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Settings
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
}
