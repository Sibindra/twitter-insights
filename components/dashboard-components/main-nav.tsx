import { cn } from "@/lib/utils/utils";
import Image from "next/image";
import logo from "@/app/favicon.ico";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <div className="flex items-center justify-between ">
        <Image
          src={logo}
          width={20}
          height={20}
          alt="not found"
          className="rounded-none"
        />
        <p className="text-lg px-2 font-semibold">INSIGHTS NEPAL</p>
      </div>
    </nav>
  );
}
