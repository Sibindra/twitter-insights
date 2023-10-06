import { BiGridAlt, BiUser, BiCog, BiX } from "react-icons/bi"; 
import { HiMenuAlt2 } from "react-icons/hi";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Sidebar() {
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
    window.innerWidth < 640 ? setSidebarOpen(false): (null)
  };

  return (
    <div className="bg-slate-50">
      {sidebarOpen ? (
        <button
          onClick={closeSidebar} // Add an onClick handler for the close button
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm rounded-none-none sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-20"
        >
          <span className="sr-only">Close menu</span>
          <BiX className="w-6 h-6" /> {/* Use the close icon BiX */}
        </button>
      ) : (
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
      )}

      {sidebarOpen && (
        <aside
          id="default-sidebar"
          className="h-screen w-screen transform transition-transform duration-300 ease-in-out border-r"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-5 lg:w-1/6">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  href="/dashboard"
                  className="flex items-cener p-2 rounded-none-lg hover:border-black hover:border"
                  onClick={closeSidebar}
                >
                  <BiGridAlt className="w-6 h-6 transition duration-75 group-hover:" />
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/profile"
                  className="flex items-center p-2 rounded-none-lg hover:border-black hover:border"
                  onClick={closeSidebar}

                >
                  <BiUser className="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:" />
                  <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/form"
                  className="flex items-center p-2 rounded-none-lg hover:border-black hover:border"
                  onClick={closeSidebar}

                >
                  <BiCog className="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:" />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Prefrences
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
