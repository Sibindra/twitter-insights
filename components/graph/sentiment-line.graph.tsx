import { getSentiment } from "@/lib/sentiment";
import { useQuery } from "@tanstack/react-query";
import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { GraphCardProps } from "./fav-line.graph";

interface SentimentAnalysisCardProps {
  input: string[];
}

export default function SentimentAnalysisGraph({
  data,
  size,
  className,
}: GraphCardProps) {


  const { data:sentimentResult, status } = useQuery({
    queryKey: ["sentiment", data],
    queryFn: async () => await getSentiment(data),
  });

  if (status === "loading") {
    return <p>loading ....</p>;
  }

  if (status === "error") {
    return <p>error</p>;
  }

  const result = Array.isArray(sentimentResult)
    ? data.map((subArray:any) => {
        let maxScore = -1;
        let maxScoreLabel = "";

        (subArray as unknown as { label: string; score: number }[]).forEach(
          (obj) => {
            if (typeof obj === "object" && obj.score > maxScore) {
              maxScore = obj.score;
              maxScoreLabel = obj.label;
            }
          }
        );

        return { label: maxScoreLabel, score: maxScore.toFixed(4) };
      })
    : [];

  console.log("data  = ", data);
  console.log("result = ", result);
  console.log('response = ', sentimentResult)

  const sentimentData = result.map((obj:any) => {
    if (obj.label === "LABEL_0") {
      obj.label = "Negative";
    } else if (obj.label === "LABEL_1") {
      obj.label = "Positive";
    } else {
      obj.label = "Neutral";
    }

    return obj;
  });

  console.log("sentiment data  =", sentimentData);

  return (
    <div>
      <ResponsiveContainer width="100%" height={size} className={className}>
        <LineChart
          width={500}
          height={300}
          data={sentimentData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="label" stroke="#000000" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
