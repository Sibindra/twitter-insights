import axios from 'axios';

export interface TweetProps {
  username: string;
  reply: boolean;
  limit: number;
  data?: TweetPromiseProps['results'] | { error: string };
}

export interface TweetPromiseProps {
  results?: Array<any>;
  continuation_token?: string;
  error?: string;
}

export default async function getTweets({
  username,
  reply,
  limit,
}: TweetProps): Promise<TweetPromiseProps | { error: string }> {
  const url = `https://twitter154.p.rapidapi.com/user/tweets?username=${username}&limit=${limit}&include_replies=${reply}&include_pinned=false`;

  try {
    const response = await axios.get(url, {
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY as string,
        'X-RapidAPI-Host': process.env.RAPIDAPI_HOST as string,
      },params: {
        // continuation_token: 'HBaAgLDd6p+2yyQAAA==',
      }
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return { error: (error as any).message } as { error: string };
  }
}
