import Contact from "@/components/ui/contact";
import Features from "@/components/ui/features";
import Footer from "@/components/ui/footer";
import { Hero } from "@/components/ui/hero";
import Navbar from "@/components/ui/navbar";
import Team from "@/components/ui/team";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
