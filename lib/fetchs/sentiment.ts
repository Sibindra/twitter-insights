export async function getSentiment(input: string[]): Promise<[string, number]> {

  const response = await fetch(
    "https://api-inference.huggingface.co/models/dpkrm/NepaliSentimentAnalysis",
    {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_HUGGINGFACE_KEY as string,
      },
      method: "POST",
      body: JSON.stringify(input),
    }
  );
  const result = await response.json();
  return result;
}


