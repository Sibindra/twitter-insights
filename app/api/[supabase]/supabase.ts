import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(
  supabaseUrl as string,
  supabaseAnonKey as string
);

export const sendSearchToSupabase = async (username: string) => {
  const { data: existingUser } = await supabase
    .from("searches ")
    .select("*")
    .eq("username", username);

  if (existingUser?.length === 0) {
    const { data: newUser, error } = await supabase
      .from("searches")
      .insert([{ username }]);
  } else {
    const { error: updateError } = await supabase
      .from("searches")
      .update({ count: (existingUser as any)[0].count + 1 })
      .eq("username", username);
  }
};

export const sendLinksToSupabase = async (username: string) => {
  const { data: existingUser } = await supabase
    .from("searches")
    .select("*")
    .eq("username", username);

  if ((existingUser as any)?.length > 0) {
    const { error: updateError } = await supabase
      .from("searches")
      .update({ count: (existingUser as any)[0].count + 1 })
      .eq("username", username);
  }
};
