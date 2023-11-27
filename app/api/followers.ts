import axios from 'axios';

export async function getUsersFollowers({
  user_id,
  limit,
}: {
  user_id?: number;
  limit: number;
}) {
  const url = `https://twitter154.p.rapidapi.com/user/followers?user_id=${user_id}&limit=${limit}`;

  const headers = {
    "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
  };

  try {
    const response = await axios.get(url, { headers });

    return response.data;
  } catch (error: unknown) {
    console.error(error);
    return { error: (error as Error).message } as { error: string };
  }
}
