import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/6">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 md:relative bg-secondary border-2  ml-auto overflow-auto">
        {children}
      </div>
    </div>
  );
}
