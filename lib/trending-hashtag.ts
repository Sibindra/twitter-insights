export interface TrendingHashtagProps{
    woeid: number;
  }
  
  export async function getTrendingHashtags({ woeid }: TrendingHashtagProps) {
    const url = `https://twitter154.p.rapidapi.com/trends/?woeid=${woeid}`;
  
    const headers = {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
    };
  
    const options = {
      method: 'GET',
      headers: headers as HeadersInit,
    };
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
  
      return response.json();
    } catch (error: unknown) {
      console.error(error);
      return { error: (error as Error).message } as { error: string };
    }
  }