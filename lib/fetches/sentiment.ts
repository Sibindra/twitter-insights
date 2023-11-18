import axios from 'axios';

export async function getSentiment(input: string[]): Promise<[string, number]> {
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/dpkrm/NepaliSentimentAnalysis',
      input,
      {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_HUGGINGFACE_KEY as string,
          'Content-Type': 'application/json',
        },
      }
    );

    const result = response.data;
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get sentiment analysis.');
  }
}
