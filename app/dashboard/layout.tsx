"use client"
import Sidebar from "@/components/ui/sidebar";
import { useSearchParams } from "next/navigation";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Define the context type
type UsernameContextType = {
  username: string;
  setUsername: (username: string) => void;
};

// Create a context with an initial value
const UsernameContext = createContext<UsernameContextType | undefined>(
  undefined
);

// Custom hook to access the context
export const useUsernameContext = (): UsernameContextType => {
  const context = useContext(UsernameContext);

  if (context === undefined) {
    throw new Error(
      "useUsernameContext must be used within a UsernameProvider"
    );
  }

  return context;
};

// Provider component
type UsernameProviderProps = {
  children: ReactNode;
};

export const UsernameProvider: React.FC<UsernameProviderProps> = ({
  children,
}: UsernameProviderProps) => {
  const [username, setUsername] = useState<string>("");
  const searchParams = useSearchParams();

  // Update the username state when the query parameter changes
  useEffect(() => {
    const newUsername = searchParams.get("username") || "";
    setUsername(newUsername);
  }, [searchParams]);

  const value = {
    username,
    setUsername,
  };

  return (
    <UsernameContext.Provider value={value}>{children}</UsernameContext.Provider>
  );
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UsernameProvider>
      <div className="flex flex-row h-screen">
        <div className="w-1/6">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 md:relative bg-secondary border-2  ml-auto overflow-auto">
          {children}
        </div>
      </div>
    </UsernameProvider>
  );
}
