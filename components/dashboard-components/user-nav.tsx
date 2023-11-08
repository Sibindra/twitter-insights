import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

export function UserNav({
  img_url,
  Name,
}: {
  img_url?: string;
  Name?: string;
}) {
  return (
    <div className=" flex gap-2 items-center ">
      <Input type="text" placeholder="search here"/>
    </div>
  );
}
