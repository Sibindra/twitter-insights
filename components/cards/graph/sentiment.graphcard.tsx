

import { getSentiment } from "@/lib/sentiment";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

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

  type graphData = { label: string; score: number };


  const dData = data.map((subArray) => {
    if (!Array.isArray(subArray)) {
      return {}; 
    }
  
    const maxObject = subArray.reduce((max, obj) => {
      if (obj.score > max.score) {
        return obj;
      }
      return max;
    }, { score: -1, label: '' });
  
    return { label: maxObject.label, score: maxObject.score.toFixed(4) };
  });

  
  console.log('ddata = ',dData)


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

  console.log('sentiment = ', sentimentData)


  return (
    <div>
      <ResponsiveContainer width={800} height={400}>
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
          <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="label" stroke="#000000" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

