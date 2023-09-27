import React, { useState, useEffect } from 'react';

async function query(data: any) {
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/dpkrm/NepaliSentimentAnalysis",
      {
        headers: { Authorization: process.env.NEXT_PUBLIC_HUGGINGFACE_KEY as string },
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

interface SentimentAnalysisCardProps {
  input: string[];
}

const SentimentAnalysisCard: React.FC<SentimentAnalysisCardProps> = ({ input }) => {
  const [queryResults, setQueryResults] = useState<any[] | null>(null);

  useEffect(() => {
    Promise.all(input.map((text) => query({ "inputs": text })))
      .then((responses) => {
        setQueryResults(responses);
        console.log(responses);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [input]);

  return (
    <div className="card">
      {queryResults ? (
        <div>
          {queryResults.map((result: any, index: number) => (
            <div key={index}>
              <p>Input Text: "{input[index]}"</p>
              {result.map((sentiment: any, sentimentIndex: number) => (
                <div key={sentimentIndex}>
                  {sentiment.map((item: any, itemIndex: number) => (
                    <div key={itemIndex}>
                      <p>Sentiment Label: {item.label}</p>
                      <p>Sentiment Score: {item.score}</p>
                      <br/>
                    </div>
                  ))}
                  <hr />
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading sentiment analysis results...</p>
      )}
    </div>
  );
};

export default SentimentAnalysisCard;
