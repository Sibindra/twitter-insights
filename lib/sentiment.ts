interface HuggingFaceApiResponse {
    label: string;
    score: number;
  }
  
  async function query(data: any): Promise<HuggingFaceApiResponse[]> {
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/dpkrm/NepaliSentimentAnalysis",
        {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_HUGGINGFACE_KEY as string,
          },
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
      console.error("Error:", error);
      throw error;
    }
  }
  
  export async function getSentiment(input: string[]): Promise<[string, number]> {
    try {
      const responses = await Promise.all(input.map((text) => query({ inputs: text })));
      const mergedResults = responses
        .map((response) => response[0]) 
        .flat(); 
  
      const maxResult = mergedResults.reduce((max, current) =>
        current.score > max.score ? current : max
      );
  
      return [maxResult.label, maxResult.score];
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
  