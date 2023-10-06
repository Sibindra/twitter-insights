import { getSentiment } from "@/lib/sentiment";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";

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

  // type graphData = { label: string; score: number };

  // const dData = data.map((subArray) => {
  //   if (!Array.isArray(subArray)) {
  //     return {}; // Handle non-array input as needed
  //   }

  //   const maxObject = subArray.reduce((max, obj) => {
  //     if (obj.score > max.score) {
  //       return obj;
  //     }
  //     return max;
  //   }, { score: -1, label: '' });

  //   return { label: maxObject.label, score: maxObject.score.toFixed(4) };
  // });

  // console.log('ddata = ',dData)

  // const gdata:graphData= data.map((obj) => {

  // })

  //  [
  //     {
  //       label: label must have max label value if the array as for each text i get max score's label
  //       score: max score
  //     }
  // ]

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

  // 0 1 2

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

  return <Card>

    {/* {sentimentData.toString()} */}
  </Card>;
}
