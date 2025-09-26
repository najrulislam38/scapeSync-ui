import Container from "@/components/Shared/Container";
import bannerImage from "./../../assets/images/Rectangle 161124256@3x.png";
import { Link } from "react-router";

import vection from "./../../assets/images/Vector.png";
import frame from "./../../assets/images/Vector 7621.png";
import StoreBtn from "@/components/Shared/StoreBtn";
import { FaApple } from "react-icons/fa";
import googlePlay from "./../../assets/images/google-play.png";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <section className=" relative bg-linear-to-r from-white to-[#FCFFFC]  overflow-hidden">
      <Container>
        <div className="relative h-screen">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full flex items-center space-y-6"
          >
            <div className="w-full relative max-w-2xl space-y-6 sm:justify-center">
              <div className="relative">
                <h1 className="text-4xl md:text-6xl lg:text-[84px]  font-bold tracking-tight text-gray-900 leading-24 sm:text-5xl lg:text-6xl">
                  All Your Jobs <br /> One Smart App
                </h1>
                <img
                  src={frame}
                  alt=""
                  loading="lazy"
                  className="absolute -bottom-2 right-1/5 z-10 "
                />
              </div>

              <div className="absolute -top-15 left-20 ">
                <img src={vection} alt="Vector" />
              </div>

              <p className="max-w-xl text-lg text-gray-600 mb-14">
                Built for business owners, employees, and clients to streamline
                job scheduling, service tracking, and team management in one
                powerful app powerful app.
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                <Link to="/">
                  <StoreBtn
                    subtitle="Download on the"
                    title="App Store"
                    icon={FaApple}
                  />
                </Link>
                <Link to="/">
                  <StoreBtn
                    subtitle="Download on the"
                    title="App Store"
                    img={googlePlay}
                  />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Side Image */}
        </div>
      </Container>
      <div className="hidden relative lg:block">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute md:block bottom-0 right-10 mt-12 flex justify-center lg:mt-0"
        >
          <img
            src={bannerImage}
            alt="App Preview"
            className="max-w-4xl drop-shadow-2xl"
            loading="lazy"
          />
          <div className="h-1/5 w-full z-20 bg-linear-to-t from-[#FCFFFC] to-transparent absolute right-0 bottom-0  opacity-90"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
