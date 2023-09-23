import Contact from "@/components/contact";
import Features from "@/components/features";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import Navbar from "@/components/navbar";
import Team from "@/components/team";

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
