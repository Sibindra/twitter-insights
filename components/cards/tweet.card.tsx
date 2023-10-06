import React, { useEffect } from "react";
import { FaHeart, FaRetweet, FaComment } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { AiTwotoneCalendar } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { getSentiment } from "@/lib/sentiment";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Skeleton } from "../ui/skeleton";

interface TweetCardProps {
  name: string;
  username: string;
  userImg: string;
  tweetText: string;
  comments: number;
  retweets: number;
  likes: number;
  date: string;
  usermedia?: string;
  source?: string;
  sentimentInput: string[];
  index: number;
}

const TweetCard: React.FC<TweetCardProps> = ({
  name,
  username,
  userImg,
  tweetText,
  comments,
  retweets,
  likes,
  date,
  usermedia,
  source,
  sentimentInput,
  index,
}) => {
  const { data, status } = useQuery({
    queryKey: ["sentiment", sentimentInput],
    queryFn: async () => await getSentiment(sentimentInput),
  });

  if (status === "loading") {
    return (
      
        <Skeleton className="bg-white border border-gray-300 rounded-sm p-1 shadow-sm">
          <div className="flex border-b flex-row pb-2 items-center justify-between">
            <div className="flex items-center">
              <Skeleton className="w-12 h-12 rounded-full mr-3" />
              <div>
                <Skeleton className="w-[100px] h-[20px] mb-[4px] rounded-full" />
                <Skeleton className="w-[150px] h-[14px] rounded-full" />
              </div>
            </div>

            {/* Right div */}
            <div className="text-gray-400 text-sm flex gap-2 items-center">
              <Skeleton className="w-[80px] h-[14px] rounded-full" />
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <Skeleton className="w-full h-[20px]" />
            <Skeleton className="w-full h-[100px]" />
          </div>

          <div className="flex justify-between mt-3">
            <div className="flex space-x-1 items-center">
              <Skeleton className="w-[20px] h-[14px] rounded-full" />
            </div>
            <div className="flex space-x-1 items-center">
              <Skeleton className="w-[20px] h-[14px] rounded-full" />
            </div>
            <div className="flex space-x-1 items-center">
              <Skeleton className="w-[20px] h-[14px] rounded-full" />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <Badge variant={"outline"}>
              <Skeleton className="w-[150px] h-[20px]" />
            </Badge>

            <Skeleton className="w-[250px] h-[20px]" />
            <Skeleton className="w-[100px] h-[14px] rounded-full" />
          </div>
        </Skeleton>
    );
  }

  if (status === "error") {
    return <p>error</p>;
  }

  console.log(data);

  // @ts-ignore
  const sentimentResult = data[index]?.[0]?.label;

  return (
    <Card className="bg-white border border-gray-300 rounded-sm p-1 shadow-sm">
      <CardHeader className="flex border-b flex-row pb-2 items-center justify-between">
        {/* left div */}
        <div className="flex items-center">
          <img
            src={userImg}
            alt={`${username}'s profile`}
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <p className="font-bold">{name}</p>
            <p className="font-medium text-sm text-gray-500">@{username}</p>
          </div>
        </div>

        {/* right div */}
        <div className="text-gray-400 text-sm flex gap-2 items-center">
          <AiTwotoneCalendar />
          {new Date(date).toDateString()}
        </div>
      </CardHeader>

      <CardContent className=" mt-4 flex flex-col gap-3">
        <p className=" text-lg">{tweetText}</p>

        {usermedia && (
          <div className="w-full h-64">
            <img
              src={userImg}
              alt={`${username}'s profile`}
              className="w-full h-full rounded-sm"
            />
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between mt-3">
        <div className="flex space-x-1 items-center">
          <FaComment className="text-gray-600" />
          <span className="text-gray-500">{comments}</span>
        </div>
        <div className="flex space-x-1 items-center">
          <FaRetweet className="text-gray-600" />
          <span className="text-gray-500">{retweets}</span>
        </div>
        <div className="flex space-x-1 items-center">
          <FaHeart className="text-gray-600" />
          <span className="text-gray-500">{likes}</span>
        </div>
      </CardFooter>

      {source && (
        <CardFooter className="flex items-center justify-between text-sm text-gray-500">
          <HoverCard>
            <HoverCardTrigger className=" cursor-pointer">
              <Badge variant={"outline"}>
                {sentimentResult === "LABEL_1"
                  ? "Happy and Positive ☀️"
                  : sentimentResult === "LABEL_0"
                  ? "Sad  😞"
                  : "Neutral 😶"}
              </Badge>
            </HoverCardTrigger>

            <HoverCardContent>
              Our Model Analyzes this tweet to be
              {sentimentResult === "LABEL_1"
                ? " Happy and Positive Sentiment Tweet"
                : sentimentResult === "LABEL_0"
                ? " Sad Sentiment Tweet"
                : " Neutral Sentiment Tweet"}
            </HoverCardContent>
          </HoverCard>

          <span>{source}</span>
        </CardFooter>
      )}
    </Card>
  );
};

export default TweetCard;
