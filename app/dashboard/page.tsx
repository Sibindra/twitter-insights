"use client";
import { BiGridAlt, BiUser, BiCog } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";

export default function Dashboard() {
  // sidebar state for mobile screens
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="">
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
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border border-black"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-5">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 rounded-none-lg hover:bg-gray-100"
                >
                  <BiGridAlt className="w-6 h-6 transition duration-75 group-hover:" />
                  <span className="ml-3">Dashboard</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center p-2 rounded-none-lg hover:bg-gray-100"
                >
                  <BiUser className="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:" />
                  <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center p-2 rounded-none-lg hover:bg-gray-100"
                >
                  <BiCog className="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Settings
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      )}

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2  border-black rounded-none-none ">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded-none-none border border-black ">
              <p className="text-2xl  ">+</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded-none border border-black ">
              <p className="text-2xl  ">+</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded-none border border-black ">
              <p className="text-2xl  ">+</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded-none border border-black ">
            <p className="text-2xl  ">+</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center rounded-none border border-black h-28 ">
              <p className="text-2xl  ">+</p>
            </div>
            <div className="flex items-center justify-center rounded-none border border-black h-28 ">
              <p className="text-2xl  ">+</p>
            </div>
            <div className="flex items-center justify-center rounded-none border border-black h-28 ">
              <p className="text-2xl  ">+</p>
            </div>
            <div className="flex items-center justify-center rounded-none border border-black h-28 ">
              <p className="text-2xl  ">+</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded-none border border-black ">
            <p className="text-2xl  ">+</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded-none border border-black h-28 ">
              <p className="text-2xl  ">+</p>
            </div>
            <div className="flex items-center justify-center rounded-none border border-black h-28 ">
              <p className="text-2xl  ">+</p>
            </div>
            <div className="flex items-center justify-center rounded-none border border-black h-28 ">
              <p className="text-2xl  ">+</p>
            </div>
            <div className="flex items-center justify-center rounded-none border border-black h-28 ">
              <p className="text-2xl  ">+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
