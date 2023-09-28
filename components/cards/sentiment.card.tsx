import { getSentiment } from "@/lib/sentiment";
import React, { useState, useEffect } from "react";

interface SentimentAnalysisCardProps {
  input: string[];
}

export default function SentimentAnalysisCard({ input }: SentimentAnalysisCardProps) {
  const [maxLabel, setMaxLabel] = useState<string | null>(null);
  const [maxScore, setMaxScore] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [label, score] = await getSentiment(input);
        setMaxLabel(label);
        setMaxScore(score);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData();
  }, [input]);

  return (
    <div>
      {maxLabel !== null && maxScore !== null && (
        <>
          <p>Max Label: {maxLabel}</p>
          <p>Max Score: {maxScore}</p>
        </>
      )}
    </div>
  );
}

