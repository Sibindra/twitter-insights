import Contact from "@/components/contact";
import Features from "@/components/features";
import Home from "@/components/home";
import Team from "@/components/team";
import Footer from "@/components/footer";
import Working from "@/components/working";
import { supabase } from "./api/[supabase]/supabase";

export default async function Main() {

  


  return (
    <main>
      <Home />
      <Features />
      <Team />
      <Working />
      {/* TODO: */}
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
