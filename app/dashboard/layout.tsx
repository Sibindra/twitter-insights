
import SideBar from '@/components/SideBar';
import React, { ReactNode } from 'react';


interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-row">
      <div className="flex">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex md:relative w-5/6 bg-secondary h-screen border-2 border-red-500 ml-auto overflow-hidden">
        {children}
      </div>
    </div>
  );
}
