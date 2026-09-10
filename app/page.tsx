import Features from "./Landing/Feature";
import Footer from "./Landing/Footer";
import Heroblock from "./Landing/Heroblock";
import Navbar from "./Landing/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <Heroblock />
      <Features />
      <Footer />
    </>
  );
}

