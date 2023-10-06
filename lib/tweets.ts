
export interface TweetProps {
  username: string;
  reply: boolean;
  limit: number;
  data?: TweetPromiseProps | { error: string }; 
}

// promised output 
export interface TweetPromiseProps {
  results?: Array<any>; 
  continuation_token?: string; 
  error?: string; 
}


export default async function getTweets({
  username,
  reply,
  limit,
}: TweetProps):Promise<TweetPromiseProps | { error: string }> {
  const url = `https://twitter154.p.rapidapi.com/user/tweets?username=${username}&limit=${limit}&include_replies=${reply}&include_pinned=false`;

  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
  };

  const options = {
    method: "GET",
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
