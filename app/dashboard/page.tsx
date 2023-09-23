import TweetGraphCard from "@/components/cards/tweet-graph.card";

export default function Dashboard() {
  return (
    <>
      <TweetGraphCard username={"elonmusk"} reply={false} limit={2}/>
    </>
  );
}
