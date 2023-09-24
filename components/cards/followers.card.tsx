// count section in profile
"use client"
import { UserDataProps, getUserDetails } from "@/lib/user-details";
import { BsFillPeopleFill, BsFillSuitHeartFill } from "react-icons/bs";
import { FaRetweet } from "react-icons/fa";
import { MdDonutSmall } from "react-icons/md";
import { useEffect, useState } from "react";

export default function BannerCard({ username }: UserDataProps) {
  const [userData, setUserData] = useState<UserDataProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserDetails({ username });
        setUserData(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("An error occurred while fetching data. Please try again later.");
      }
    };

    fetchData();
  }, [username]);

  if (error) {
    // error diplay code here (eg: error banenr or animation)
    return <p>Error: {error}</p>;
  }

  if (!userData) {
    // Loading section code here
    return <p>Loading...</p>;
  }

  const {  follower_count, following_count, favourites_count, number_of_tweets } = userData;
 

  return (
    <div className=" flex flex-col gap-3  ">

      {/* followers count section */}
      <div className="flex  bg-white p-3 gap-5">
        <div>
          <BsFillPeopleFill className=" h-10 w-10 " />
        </div>
        <div>
          <p className="text-slate-500 ">Followers</p>
          <p className="text-xl font-medium">{follower_count}</p>
        </div>
      </div>

      {/* following count section */}
      <div className="flex gap-5  bg-white p-3">
        <div>
          <MdDonutSmall className="h-10 w-10" />
        </div>
        <div>
          <p className=" text-slate-500 m">Following</p>
          <p className="text-xl font-medium"> {following_count}</p>
        </div>
      </div>

      {/* facourites count section */}
      <div className=" flex  bg-white p-3 gap-5">
        <div>
          <BsFillSuitHeartFill className="w-10 h-10" />
        </div>

        <div>
          <p className=" text-slate-500  ">Favourites</p>
          <p className=" text-xl font-medium">{favourites_count}</p>
        </div>
      </div>

      {/* tweet count section */}
      <div className="flex gap-5  bg-white p-3">
        <div>
          <FaRetweet className="w-10 h-10" />
        </div>
        <div>
          <p className=" text-slate-500 font-medium ">tweets</p>
          <p className="text-xl  font-medium">{number_of_tweets}</p>
        </div>
      </div>
    </div>
  );
}
