import axios from 'axios';
import { TweetProps } from './tweets';

interface TweetResponse {
  data: Array<{
    tweet_id: string;
  }>;
}

interface ReplyResponse {
  text: string;
}

export async function getTweetsAndReplies({ username, limit }: TweetProps): Promise<string[]> {
  try {
    const tweetsResponse = await axios.get(`https://twitter154.p.rapidapi.com/user/tweets`, {
      params: {
        username,
        limit,
        include_replies: true,
        include_pinned: false,
      },
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
      },
    });

    const tweetsData: TweetResponse = tweetsResponse.data;

    const tweetIds = tweetsData.data.map((tweet) => tweet.tweet_id);

    const replyPromises = tweetIds.map(async (tweet_id) => {
      const response = await axios.get(`https://twitter154.p.rapidapi.com/tweet/replies`, {
        params: {
          tweet_id,
        },
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      });

      const replyData: ReplyResponse = response.data;
      return replyData.text;
    });

    const replies = await Promise.all(replyPromises);

    return replies;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch tweets and replies.');
  }
}
