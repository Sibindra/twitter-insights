"use client";

import { sendLinksToSupabase } from "@/app/api/[supabase]/supabase";
import { Badge } from "./ui/badge";
import { LocalStore } from "@/store/local-store";
import { useRouter } from "next/navigation";

export const FrequentUserBadges = ({
  frequentUsernames,
}: {
  frequentUsernames: string[];
}) => {
  const router = useRouter();

  return (
    <div className="flex gap-3 justify-center flex-wrap">
      {frequentUsernames?.map((username, index) => (
        <Badge
          key={index}
          variant="outline"
          onClick={() => {
            sendLinksToSupabase(username);
            LocalStore.setUsername(username);
            router.push(`/dashboard?username=${username}`);
          }}
          className="rounded-sm cursor-pointer hover:bg-secondary hover:text-secondary-foreground"
        >
          @{username}
        </Badge>
      ))}
    </div>
  );
};
