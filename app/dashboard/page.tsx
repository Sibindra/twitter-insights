'use client'
import LineChartDiagram from "@/components/Cards/graph.card";
import TweetCard from "@/components/Cards/tweet.card";

export default function Dashboard() {
  return (
  <div>
    <LineChartDiagram username={"elonmusk"} reply={false} limit={10}/>
  </div>);
}
