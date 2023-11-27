
import Sidebar from "@/components/sidebar";
import { getUserDetails } from "../../api/user-details";

export default async function DashboardLayout({
  children,
  params : { username },
}: {
  children: React.ReactNode;
  params: { username: string };
}) {

  const data = await getUserDetails(username);


  console.log('data = ',data)
  
  return (
    <div className="flex flex-row h-screen bg-slate-100">
      <div className="lg:w-1/6 w-auto bg-slate-50 lg:border-r">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 md:relative bg-secondary ml-auto overflow-auto">
        {children}
      </div>
    </div>
  );
}
