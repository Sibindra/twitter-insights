import { TweetProps } from '@/lib/getTweets';
import getTweets from '@/lib/getTweets';

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


export default async function LineChartDiagram ({username}: TweetProps) {

  const data = await getTweets({username, reply: false, limit: 10});
  
  const transformedData = data.map((abc:any, index:number) => ({
    name: `Tweet ${index + 1}`,
    uv: abc.favorite_count,
    pv: abc.retweet_count,
    amt: abc.favorite_count + abc.retweet_count,
  }));
  console.log(transformedData);


  return (<LineChart width={500} height={300} data={transformedData}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
  </LineChart>)
};
