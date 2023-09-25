// import Card from '@/components/cards/hashtag.details'

// export default function Settings() {
//   return (
//     <div>
//       <Card hashtag={'hindu'} limit={1} />
//     </div>
//   )
// }

'use client';
import React, { useState } from 'react';
import Card from '@/components/cards/hashtag.details';

export default function Settings() {
  const [hashtag, setHashtag] = useState(''); // State for the hashtag
  const [limit, setLimit] = useState(1); // State for the limit

  const handleSearch = () => {
   
    console.log(`Searching for hashtag: ${hashtag} with limit: ${limit}`);
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter hashtag"
          value={hashtag}
          onChange={(e) => setHashtag(e.target.value)}
        />
        <input
          type="number"
          placeholder="Limit"
          value={limit}
          onChange={(e) => setLimit(parseInt(e.target.value, 10))}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <Card hashtag={hashtag} limit={limit} />
      {/* Other content here */}
    </div>
  );
}

