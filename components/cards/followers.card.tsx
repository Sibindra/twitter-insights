"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { GoVerified } from "react-icons/go";
import { BsPeople } from "react-icons/bs";

export interface FollowerData {
  creation_date: string;
  user_id: string;
  username: string;
  name: string;
  follower_count: number;
  following_count: number;
  is_private: boolean;
  is_verified: boolean;
  location: string;
  profile_pic_url: string;
  description: string;
  external_url: string | null;
  number_of_tweets: number;
  bot: boolean;
  timestamp: number;
}

export interface RecentFollowersProps {
  data: FollowerData[];
  limit: number;
}

function RecentFollowers({ data , limit }: RecentFollowersProps) {

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Followers</CardTitle>
        <CardDescription>Your Most Popular Followers</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {Array.isArray(data) ? (
          data.slice(0, limit).map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between space-x-4"
            >
              <div className="flex items-center space-x-4">
                <Avatar className="border">
                  {item.profile_pic_url !==
                    "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" &&
                  item.profile_pic_url !== null ? (
                    <AvatarImage src={item.profile_pic_url} />
                  ) : (
                    <AvatarFallback>
                      {item.name
                        .split(" ")
                        .map((word: string) => word.charAt(0))
                        .join("")}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <p className="text-md font-medium leading-none flex gap-2 items-center">
                    {item.name}{" "}
                    {item.is_verified && (
                      <span className="text-blue-500">
                        <GoVerified size={15} />
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground w-64 truncate">
                    {item.description}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground flex items-center gap-4">
                  {item.follower_count.toLocaleString()}
                  <BsPeople size={20} />{" "}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading ....</p>
        )}
      </CardContent>
    </Card>
  );
}

export default RecentFollowers;
