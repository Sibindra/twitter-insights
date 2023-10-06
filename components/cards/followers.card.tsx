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
import { Skeleton } from "../ui/skeleton";

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

function RecentFollowers({ data, limit }: RecentFollowersProps) {
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
                  <p className="text-sm text-muted-foreground  lg:w-64 md:truncate whitespace-normal">
                    {item.description}
                  </p>
                </div>
              </div>
              <div>
                <p className="hidden md:flex text-sm text-muted-foreground items-center gap-4">
                  {item.follower_count.toLocaleString()}
                  <BsPeople size={20} />
                </p>
              </div>
            </div>
          ))
        ) : (
          <Skeleton className="w-[100%] p-4 bg-white space-y-4">
            <div className="flex items-center justify-between space-x-4">
              <Skeleton className="w-[40px] h-[40px] rounded-full" />

              <div>
                <Skeleton className="w-[100px] h-[20px] mb-[8px] rounded-full" />

                <Skeleton className="w-[200px] h-[16px] rounded-full" />
              </div>
            </div>

            <div className="space-y-4">
              {Array.from({ length: limit }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between space-x-4"
                >
                  {/* Skeleton for the avatar */}
                  <Skeleton className="w-[40px] h-[40px] rounded-full" />

                  <div>
                    {/* Skeleton for the name */}
                    <Skeleton className="w-[100px] h-[16px] mb-[4px] rounded-full" />

                    {/* Skeleton for the description */}
                    <Skeleton className="w-[200px] h-[12px] rounded-full" />
                  </div>

                  <div>
                    {/* Skeleton for the follower count */}
                    <Skeleton className="w-[60px] h-[20px] rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </Skeleton>
        )}
      </CardContent>
    </Card>
  );
}

export default RecentFollowers;
