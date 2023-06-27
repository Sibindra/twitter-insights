import Features from "./components/Features";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import Team from "./components/Team";

{/*
  TODO:

  - remove routes and use smooth scroll 
  - make all section single page 
  - change components for contact us from flowbyte 
  - change my Team section from flobyte
  - fix styling for changed components
*/}

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Features/>
      <Team/>
      <Footer/>
    </div>
  );
}
