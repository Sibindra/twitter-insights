import { useEffect, useState } from "react";
import { supabase } from "@/lib/database/supabase"; 

export function useFrequentUsernames() {
  const [frequentUsernames, setFrequentUsernames] = useState([]);

  const fetchTopFiveUsernames = async () => {
    const { data: topUsernames, error } = await supabase
      .from("searches")
      .select("username, count")
      .order("count", { ascending: false })
      .limit(5);

    if (topUsernames) {
      const formattedUsernames = topUsernames.map(
        (entry: any) => entry.username
      );
      setFrequentUsernames(formattedUsernames as any);
    }
  };

  useEffect(() => {
    fetchTopFiveUsernames();
  }, []);

  return frequentUsernames;
}
