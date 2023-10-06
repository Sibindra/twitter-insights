interface HuggingFaceApiResponse {
  label: string;
  score: number;
}

// async function query(data: any): Promise<HuggingFaceApiResponse[]> {
//   try {
//     const response = await fetch(
//       "https://api-inference.huggingface.co/models/dpkrm/NepaliSentimentAnalysis",
//       {
//         headers: {
//           Authorization: process.env.NEXT_PUBLIC_HUGGINGFACE_KEY as string,
//         },
//         method: "POST",
//         body: JSON.stringify(data),
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`Request failed with status ${response.status}`);
//     }

//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// }


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


