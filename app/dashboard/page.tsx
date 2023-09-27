"use client";

import { useAppSelector } from "@/store/store";

export default function Dashboard() {
  const username = useAppSelector((state) => state.username.username);

  return (
    <>
    </>
  );
}
