import { TweetProps } from "./tweets";

interface TweetResponse {
    data: Array<{
      tweet_id: string;
    }>;
  }
  
  interface ReplyResponse {
    text: string;
  }

export async function getTweetsAndReplies({username , limit }:TweetProps ): Promise<string[]> {
  try {
    const tweetsResponse = await fetch(`https://twitter154.p.rapidapi.com/user/tweets?username=${username}&limit=${limit}&include_replies=true&include_pinned=false`);
    const tweetsData: TweetResponse = await tweetsResponse.json();

    const tweetIds = tweetsData.data.map((tweet) => tweet.tweet_id);

    const replyPromises = tweetIds.map(async (tweet_id) => {
      const url = `https://twitter154.p.rapidapi.com/tweet/replies??tweet_id=${tweet_id}`;
      const response = await fetch(url);
      const replyData: ReplyResponse = await response.json();
      return replyData.text;
    });

    const replies = await Promise.all(replyPromises);

    return replies;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch tweets and replies.');
  }
};
