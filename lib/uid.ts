import axios from "axios";

export async function fetchUserData() {

  console.log(process.env.RAPIDAPI_KEY)
  
  const options = {
    method: "GET",
    url: "https://twitter154.p.rapidapi.com/user/details",
    params: {
      username: "iamvkohli",
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
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
