export interface UserDataProps {
  username: string;
  creation_date?: string;
  user_id?: number;
  name?: string;
  follower_count?: number;
  following_count?: number;
  is_private?: boolean;
  is_verified?: boolean;
  location?: string;
  profile_banner_url?: string;
  profile_pic_url?: string;
  description?: string;
  external_url?: string;
  number_of_tweets?: number;
  bot?: boolean;
  timestamp?: number;
  has_nft_avatar?: boolean;
  favourites_count?: number;
}

export const getUserDetails = async ({ username }: UserDataProps) => {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://twitter154.p.rapidapi.com/user/details",
    params: {
      username: `${username}`,
    },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
