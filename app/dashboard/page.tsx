import TweetGraphCard from "@/components/Cards/graph-test.card";

export default function Dashboard() {
  return (
    <>
      <TweetGraphCard username={"elonmusk"} reply={false} limit={2}/>
    </>
  );
}
