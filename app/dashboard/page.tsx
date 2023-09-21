import TestCard from "@/components/Cards/test.card";
import TweetCard from "@/components/Cards/tweet.card";

export default function Dashboard() {
  return <div><TestCard username={"elonmusk"}/>


  <TweetCard username={"elonmusk"} reply={true} limit={10}/>
  </div>;
}
