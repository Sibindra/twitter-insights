import { cn } from "@/lib/utils";
import Image from "next/image";

type MainNavProps = {
  username: string;
  avatar_url: string;
  className?: string;
};

export function MainNav({
  className,
  username,
  avatar_url,
  ...props
}: MainNavProps) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <div className="flex items-center justify-between ">
        <Image
          src={avatar_url}
          width={20}
          height={20}
          alt="not found"
          className=" rounded-full"
        />
        <p className="text-lg px-2 font-semibold">{username}</p>
      </div>
    </nav>
  );
}
