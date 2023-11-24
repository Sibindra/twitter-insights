"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MainNav } from "@/components/dashboard-components/main-nav";
import { UserNav } from "@/components/dashboard-components/user-nav";
import { BsActivity, BsFillHeartFill, BsPeopleFill } from "react-icons/bs";
import { UserDataProps, getUserDetails } from "@/lib/fetches/user-details";
import { useQuery } from "@tanstack/react-query";
import getTweets, { TweetPromiseProps } from "@/lib/fetches/tweets";
import TweetLineGraphCard from "@/components/graph/tweet-line.graph";
import TweetBarGraphCard from "@/components/graph/tweet-bar.graph";
import TweetAreaGraphCard from "@/components/graph/tweet-area.graph";
import FavCountBarGraph from "@/components/graph/fav-bar.graph";
import SentimentAreaGraph from "@/components/graph/sentiment-area.graph";
import LoadingPage from "@/components/message-pages/loading-page";
import ErrorPage from "@/components/message-pages/error.page";
import { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { useAppSelector } from "@/store/hooks";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

export default function DashboardPage() {

    // date picker state
    const [date, setDate] = useState<DateRange | undefined>({
      from: new Date(2022, 0, 20),
      to: addDays(new Date(2022, 0, 20), 20),
    });
    
  const username = useAppSelector((state) => state.username);

  console.log(username);

  const [isLoading, setIsLoading] = useState(false);

  const componentRef: any = useRef();

  // user details
  const { data: userData, status: userStatus } = useQuery<UserDataProps>({
    queryKey: ["user-details", username],
    queryFn: async () => await getUserDetails(username),
  });

  const { data: tweetData, status: tweetStatus } = useQuery<TweetPromiseProps>({
    queryKey: ["tweets", username],
    queryFn: async () => {
      // await new Promise((resolve) => setTimeout(resolve, 3000));
      return await getTweets({ username: username, limit: 15, reply: true });
    },
  });

  const sentimentInput =
    (tweetData as { results?: any[] })?.results?.map(
      (result: any) => result.text
    ) || [];

  if (userStatus === "loading") {
    return <div></div>;
  }

  if (userStatus === "error") {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }

  // content for retweet card
  const retweetSum = tweetData?.results?.reduce(
    (a, b) => a + b.retweet_count,
    0
  );



  return isLoading ? (
    <LoadingPage />
  ) : (
    <div className=" flex-col flex flex-wrap" ref={componentRef}>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav
            className="mx-6"
            username={userData.username}
            avatar_url={userData.profile_pic_url as string}
          />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <ReactToPrint
              trigger={() => (
                <Button className=" bg-[#8784D8] hover:bg-[#9a97ecf2]">
                  Download
                </Button>
              )}
              content={() => componentRef.current}
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tweets</CardTitle>
              <BsActivity size={15} className=" text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {userData.number_of_tweets?.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">tweets till now</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Following</CardTitle>
              <BsFillHeartFill size={15} className=" text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {userData.following_count?.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                total likes earned till now
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Followers</CardTitle>
              <BsPeopleFill size={15} className=" text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {userData.follower_count?.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">at this moment</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Following</CardTitle>
              <BsPeopleFill size={15} className=" text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {userData.following_count?.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">at the moment</p>
            </CardContent>
          </Card>
        </div>

        {/* graphs from here */}

        {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7"> */}
        <div className=" flex flex-col gap-3">
          <Card className="col-span-3">
            <CardHeader className="border-b">
              <CardTitle>Retweets</CardTitle>
              <CardDescription className="text-center lg:text-left">
                retweets performance over a recent time frame
              </CardDescription>

              <div className={cn("grid gap-2")}>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-[300px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, "LLL dd, y")} -{" "}
                            {format(date.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(date.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={date?.from}
                      selected={date}
                      onSelect={setDate}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </CardHeader>

            <CardContent className="flex p-2">
              <div className=" border flex-1">Total Retweets: {retweetSum}</div>

              <div className=" border flex-1">
                <TweetLineGraphCard size={400} data={tweetData} />
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-7">
            <CardHeader>
              <CardTitle>Tweet Performance </CardTitle>
              <CardDescription className="text-center lg:text-left">
                retweets performance over a recent time frame in a bar graph
              </CardDescription>
            </CardHeader>

            <CardContent className="pl-2">
              <TweetBarGraphCard size={400} data={tweetData} />
            </CardContent>
          </Card>

          <Card className="col-span-7">
            <CardHeader>
              <CardTitle>Tweet Performance </CardTitle>
              <CardDescription className="text-center lg:text-left">
                retweets i.e. Social Reach over a recent time
              </CardDescription>
            </CardHeader>

            <CardContent className="pl-2">
              <TweetAreaGraphCard size={500} data={tweetData} />
            </CardContent>
          </Card>

          <Card className="col-span-7">
            <CardHeader>
              <CardTitle>Sentiment</CardTitle>
              <CardDescription className="text-center lg:text-left">
                Recent Sentiment from most recent tweets
              </CardDescription>
            </CardHeader>

            <CardContent className="pl-2">
              <SentimentAreaGraph input={sentimentInput} size={500} />
            </CardContent>
          </Card>

          <Card className="col-span-7">
            <CardHeader>
              <CardTitle>Favorites Score</CardTitle>
              <CardDescription className="text-center lg:text-left">
                users recent favorites
              </CardDescription>
            </CardHeader>

            <CardContent className="pl-2">
              {/* <FavCountAreaGraph size={500} data={tweetData} /> */}
              {/* @ts-ignore */}
              <FavCountBarGraph size={400} data={tweetData} />
            </CardContent>
          </Card>

          <Card className="col-span-7">
            <CardHeader>
              <CardTitle>Suggested Hashtags </CardTitle>
              <CardDescription className="text-center lg:text-left">
                we suggest these hashtags for your twitter growth journey based
                on your location
              </CardDescription>
            </CardHeader>

            {/* TODO:replce with other */}
            {/* <CardContent className="pl-2">
              {<TrendingHashtagCard woeid={1} />}
            </CardContent> */}
          </Card>
        </div>
      </div>
    </div>
  );
}
