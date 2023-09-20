import axios from "axios";

export async function fetchUserData() {

  const username = "iamvkohli"
  
  const options = {
    method: "GET",
    url: "https://twitter154.p.rapidapi.com/user/details",
    params: {
      username: username,
    },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.NETX_PUBLIC_RAPIDAPI_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
