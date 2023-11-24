import { FaHeart, FaRetweet, FaComment } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { AiTwotoneCalendar } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { getSentiment } from "@/lib/fetches/sentiment";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TweetCardProps {
  key: number;
  name: string;
  username: string;
  userImg: string;
  tweetText: string;
  comments: number;
  retweets: number;
  likes: number;
  date: string;
  usermedia?: string | null;
  source?: string;
  sentimentInput: string[];
  className?: string;
}

const TweetCard: React.FC<TweetCardProps> = ({
  key,
  name,
  username,
  userImg,
  tweetText,
  comments,
  retweets,
  likes,
  date,
  source,
  sentimentInput,
  className
}) => {
  const { data, status } = useQuery({
    queryKey: ["sentiment", sentimentInput],
    queryFn: async () => await getSentiment(sentimentInput),
  });

  if (status === "loading") {
    return (
      <Skeleton className={cn("bg-white border  rounded-sm p-1 shadow-sm" , className)}>
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

  type result = {
    label: string;
    score: number;
  };

  // @ts-ignore
  const sentimentResult = data[key]?.[0].label;

  return (
    <Card className=" border  rounded-sm p-1 ">
      <CardHeader className="flex border-b flex-row pb-2 items-center justify-between">
        {/* left div */}
        <div className="flex items-center">
          <Image
            src={userImg}
            alt={`${username}'s profile`}
            className="rounded-full mr-3"
            width={30}
            height={30}
          />

          <div>
            <p className="font-bold">{name}</p>
            <p className="font-medium text-sm text-gray-500">@{username}</p>
          </div>
        </div>

        {/* right div */}
        <div className="text-gray-400 text-sm hidden md:flex gap-2 items-center">
          <AiTwotoneCalendar />
          {new Date(date).toDateString()}
        </div>
      </CardHeader>

      <CardContent className=" mt-4 flex flex-col gap-3">
        <p className=" text-lg">{tweetText}</p>
      </CardContent>

      <CardFooter className="flex justify-between mt-3">
        <div className="flex space-x-1 items-center">
          <FaComment size={15} className="text-gray-600" />

          {comments && (
            <span className="text-gray-500 text-sm">
              {comments.toLocaleString()}
            </span>
          )}
        </div>
        <div className="flex space-x-1 items-center">
          <FaRetweet className="text-gray-600" />

          {retweets && (
            <span className="text-gray-500 text-sm">
              {retweets.toLocaleString()}
            </span>
          )}
        </div>
        <div className="flex space-x-1 items-center ">
          <FaHeart className="text-gray-600" />

          {likes && (
            <span className="text-gray-500 text-sm">
              {likes.toLocaleString()}
            </span>
          )}
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

          <Badge variant={"secondary"} className="hidden md:flex">
            {source}
          </Badge>
        </CardFooter>
      )}
    </Card>
  );
};

export default TweetCard;
