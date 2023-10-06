import React from "react";
import { FaHeart, FaRetweet, FaComment } from "react-icons/fa";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

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
  usermedia
}) => {
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

        {/* Add a gap */}
        <div className="flex-1"></div>

        {/* right div */}
        <div className="text-gray-400 text-sm">{date}</div>
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
          <span className="text-gray-500">{comments}K</span>
        </div>
        <div className="flex space-x-1 items-center">
          <FaRetweet className="text-gray-600" />
          <span className="text-gray-500">{retweets}K</span>
        </div>
        <div className="flex space-x-1 items-center">
          <FaHeart className="text-gray-600" />
          <span className="text-gray-500">{likes}M</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TweetCard;
