import getTweets, { TweetProps } from '@/lib/Followers'
import React from 'react'

export default async function TweetCard({username,reply,limit}:TweetProps) {


    const data = await getTweets({ username,reply,limit });

    console.log(data)

    // const tweet_id = data.results[4].tweet_id
    // console.log(tweet_id)


  return (
    <div>
        {/* ID: {tweet_id} */}
        abcd
    </div>
  )
}
