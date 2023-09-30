import getTweets, { TweetPromiseProps, TweetProps } from "@/lib/tweets";
import { useEffect, useState } from "react";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts";

export default function FavCountGraph({ username, reply, limit }: TweetProps) {

  const [tweetData, setTweetData] = useState<TweetPromiseProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTweets({ username, reply, limit });
        setTweetData(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(
          "An error occurred while fetching data. Please try again later."
        );
      }
    };

    fetchData();
  }, [username, reply, limit]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!tweetData) {
    return <p>Loading...</p>;
  }

  const results = tweetData?.results || [];

  console.log('results = ', results);

  // date vs fav count

  const data = results.map((result) => ({
    name: result.creation_date,
    text: result.text,
    favorite_count: result.favorite_count,
  }));

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          className="bg-sky-100"
          margin={{
            top: 5,
            right: 3,
            left: 2,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="favorite_count"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
           <Line
            type="monotone"
            dataKey="name"
            stroke="#ffffff"
            activeDot={{ r: 8 }}
          />
           <Line
            type="monotone"
            dataKey="text"
            stroke="#000000"
            activeDot={{ r: 8 }}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
