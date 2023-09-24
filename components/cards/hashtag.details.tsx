'use client';
import { HastagProps, default as getHashtag, default as hashtag } from '@/lib/hashtag-data';
import { useEffect, useState } from 'react';

export default function Card({hashtag, limit}: HastagProps) {

    const [hashtagData, setHastagData] = useState<HastagProps | null>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getHashtag({ hashtag, limit });
            setHastagData(data);
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        };


        fetchData();
    },[hashtag, limit])


    console.log(hashtagData)

    const result = hashtagData?.detail || [];


    return(
      <div>
        <ul>
        {result.map((tweet: any) => (
          <li key={tweet.id}>{tweet.text}</li>
        ))}
      </ul>
      </div>
    )
}