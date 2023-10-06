import { getSentiment } from "@/lib/sentiment";
import { useQuery } from "@tanstack/react-query";

interface SentimentAnalysisCardProps {
  input: string[];
}

export default function SentimentAnalysisCard({
  input,
}: SentimentAnalysisCardProps) {
  const { data, status } = useQuery({
    queryKey: ["sentiment", input],
    queryFn: async () => await getSentiment(input),
  });

  if (status === "loading") {
    return <p>loading ....</p>; 
  }

  if (status === "error") {
    return <p>error</p>;
  }

  // Check if data is an array before mapping
  const result = Array.isArray(data)
    ? data.map((subArray) => {
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

  const sentimentData = result.map((obj) => {
    if (obj.label === "LABEL_0") {
      obj.label = "Negative";
    } else if (obj.label === "LABEL_1") {
      obj.label = "Positive";
    } else {
      obj.label = "Neutral";
    }

    return obj;
  });

  return (
    <div>
      {input?.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
          ----
        </div>
      ))}

      {sentimentData.map((obj, index) => (
        <div key={index}>
          <p>Label: {obj.label}</p>
          <p>Score {obj.score}</p>
          -------
        </div>
      ))}
    </div>
  );
}
