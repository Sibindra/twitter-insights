import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function UserNav({img_url}:{img_url?:string} ) {
  return (
    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
      <Avatar className="h-8 w-8 border">
        {img_url && <AvatarImage src={img_url} alt="not found" />}
        <AvatarFallback>IN</AvatarFallback>
      </Avatar>
    </Button>
  );
}
