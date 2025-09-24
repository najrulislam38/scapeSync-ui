import Banner from "./Banner";
import Features from "./Featurs";
import Navbar from "./Navbar";
import Services from "./Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Services />
      <Features />
    </div>
  );
}
