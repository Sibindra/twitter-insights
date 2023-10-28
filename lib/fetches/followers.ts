export async function getUsersFollowers({
  user_id,
  limit,
}: {
  user_id?: number;
  limit: number;
}) {
  const url = `https://twitter154.p.rapidapi.com/user/followers?user_id=${user_id}&limit=${limit}`;

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
