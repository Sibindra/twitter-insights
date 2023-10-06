"use client";

import Sidebar from "@/components/ui/sidebar";
import QueryProvider from "../query.provider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="flex flex-row h-screen bg-slate-100">

        <div className="lg:w-1/6 w-auto bg-slate-50 lg:border">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 md:relative bg-secondary ml-auto overflow-auto">
          {children}
        </div>

      </div>
  );
}
