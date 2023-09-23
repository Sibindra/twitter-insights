export interface UserDataProps{
  username: string;
  creation_date?: string;
  user_id?: string;
  name?: string;
  follower_count?: number;
  following_count?: number;
  is_private?: boolean;
  is_verified?: boolean;
  location?: string;
  profile_pic_url?: string;
  description?: string;
  external_url?: string;
  number_of_tweets?: number;
  bot?: boolean;
  timestamp?: number;
}

export async function getUserDetails({ username }: UserDataProps) {
  const url = `https://twitter154.p.rapidapi.com/user/details?username=${username}`;

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