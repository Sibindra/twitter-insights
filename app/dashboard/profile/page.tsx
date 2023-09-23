"use client";
import BannerCard from "@/components/cards/banner.card";
import { useUsernameContext } from "../layout";

export default function Profile() {
  const { username } = useUsernameContext();

  return (
    <div>
      <BannerCard username={username} />
    </div>
  );
}
