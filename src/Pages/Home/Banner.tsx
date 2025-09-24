import Container from "@/components/Shared/Container";
import bannerImage from "./../../assets/images/Rectangle 161124256@3x.png";
import { Link } from "react-router";
import macBtn from "./../../assets/images/button/Store download button.png";
import playStoreBtn from "./../../assets/images/button/Store download button (1).png";
import vection from "./../../assets/images/Vector.png";

const Banner = () => {
  return (
    <section className=" relative bg-linear-to-r from-white to-[#FCFFFC] ">
      <Container>
        <div className="relative h-screen">
          <div className="h-full flex items-center space-y-6">
            <div className="w-full relative max-w-2xl space-y-6 sm:justify-center">
              <h1 className="text-4xl md:text-6xl lg:text-[84px]  font-bold tracking-tight text-gray-900 leading-24 sm:text-5xl lg:text-6xl">
                All Your Jobs <br /> One Smart App
              </h1>

              <div className="absolute -top-15 left-20 ">
                <img src={vection} alt="Vector" />
              </div>

              <p className="max-w-xl text-lg text-gray-500 mb-14">
                Built for business owners, employees, and clients to streamline
                job scheduling, service tracking, and team management in one
                powerful app powerful app.
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                <Link to="/">
                  <img src={macBtn} alt="Mac button" />
                </Link>
                <Link to="/">
                  <img src={playStoreBtn} alt="Play store button" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
        </div>
      </Container>
      <div className="hidden lg:block">
        <div className="absolute hidden md:block bottom-0 right-10 mt-12 flex justify-center lg:mt-0">
          <img
            src={bannerImage}
            alt="App Preview"
            className="max-w-4xl drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
