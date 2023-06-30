import Features from "./components/Features";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}
