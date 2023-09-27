export interface HastagProps {
  hashtag: string;
  limit: number;
}

export interface HashtagPromiseProps {
  details?: Array<any>;
  error?: string;
}

export default async function getHashtag({
  hashtag,
  limit,
}: HastagProps): Promise<HashtagPromiseProps | { error: string }> {
  const url = `https://twitter154.p.rapidapi.com/hashtag/hashtag?hashtag=%23${hashtag}&limit=${limit}&section=top`;

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
    console.log(response.json())
  } catch (error: unknown) {
    console.error(error);
    return { error: (error as Error).message } as { error: string };
  }
}
