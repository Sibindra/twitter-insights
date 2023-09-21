export interface TweetProps {
    username: string;
    reply: boolean;
    limit: number;
}

export default async function getTweets({username,reply,limit}:TweetProps) {

    const url = `https://twitter154.p.rapidapi.com/user/tweets?username=${username}&limit=${limit}&include_replies=${reply}&include_pinned=false`

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
        // console.log(response.json())
      } catch (error: unknown) {
        console.error(error);
        return { error: (error as Error).message } as { error: string };
      }
}
