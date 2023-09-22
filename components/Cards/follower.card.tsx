import getFollowerStats, { FollowerFollowingProps } from "@/lib/getFollowerStats";
import React from "react";

export default async function FollowerCard({
  user_id,
}: FollowerFollowingProps) {
  const data = await getFollowerStats({ user_id});

  console.log(data);

  const follower_count = data.results[0]?.follower_count;
  const following_count = data.results[0]?.following_count;


  return (
    <main className="border-black border m-3 flex flex-col">
      <p>Follower: {follower_count}</p>
      <p>Following: {following_count}</p>
    </main>
  );
}

