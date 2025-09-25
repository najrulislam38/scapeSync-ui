import Banner from "./Banner";
import FAQ from "./FAQ";
import Features from "./Features";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Reviews from "./Reviews";
import Services from "./Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services />
      <Features />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
}
