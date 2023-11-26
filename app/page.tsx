import Contact from "@/components/contact";
import Features from "@/components/features";
import Home from "@/components/home";
import Team from "@/components/team";
import Footer from "@/components/footer";
import Working from "@/components/working";
import { supabase } from "./api/[supabase]/supabase";

export default async function Main() {

  const {data } = await supabase
    .from("searches")
    .select("username, count")
    .order("count", { ascending: false })
    .limit(5);

  const frequentUsernames = data?.map((user)=>(user.username)) || []


  return (
    <main>
      <Home frequestUsernames={frequentUsernames} />
      <Features />
      <Team />
      <Working />
      {/* TODO: */}
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
