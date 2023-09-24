"use client";
import BannerCard from "@/components/cards/banner.card";
import { useAppSelector } from "@/store/store";

export default function Profile() {

  const username = useAppSelector((state)=>state.usernameReducer.username);

  return (
    <div>
      <BannerCard username={username} />
    </div>
  );
}
