import Container from "@/components/Shared/Container";
import logo from "./../../assets/images/logo-footer.png";
import { FaApple, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import gPlay from "../../assets/images/google-play.png";
import StoreBtn from "@/components/Shared/StoreBtn";
import { Link } from "react-router";
import { BsTwitterX } from "react-icons/bs";
import shape from "../../assets/images/Vector 2.png";

export default function Footer() {
  return (
    <footer className="bg-[#0F3B34] w-full pt-24 text-white relative overflow-hidden">
      <Container>
        <div>
          <div className=" md:flex items-center gap-10 lg:gap-20 pb-16">
            <div>
              <img src={logo} alt="Logo" />
            </div>
            <p className="max-w-[404px] font-medium le">
              Your all-in-one platform for job scheduling, employee management,
              and client service built to keep your business running smoothly
              from anywhere.
            </p>

            <div className="flex items-center gap-5 flex-1 justify-end ">
              <StoreBtn
                icon={FaApple}
                subtitle="Download on the"
                title="App Store"
              />
              <StoreBtn
                img={gPlay}
                subtitle="Download on the"
                title="App Store"
              />
            </div>
          </div>
          <div className="flex gap-5 md:gap-8 text-2xl pb-8">
            <Link to={"#"}>
              <FaYoutube className="hover:text-primary hover:transition duration-300 cursor-pointer" />
            </Link>
            <Link to={"#"}>
              <BsTwitterX className="hover:text-primary hover:transition duration-300 cursor-pointer" />
            </Link>
            <Link to={"#"}>
              <FaFacebook className="hover:text-primary hover:transition duration-300 cursor-pointer" />
            </Link>
            <Link to={"#"}>
              <FaInstagram className="hover:text-primary hover:transition duration-300 cursor-pointer" />
            </Link>
          </div>
        </div>
      </Container>
      <div className="py-2 border-t border-gray-500">
        <Container>
          <p className="text-sm text-gray-500">
            &copy; 2021-2025, ScapeSync. All Rights Reserved.
          </p>
        </Container>
      </div>
      <div className="hidden lg:block max-w-[307px] absolute right-32 -bottom-32 opacity-15 z-1">
        <img src={shape} alt="" />
      </div>
      <div className="hidden lg:block max-w-[307px] absolute -right-52 -bottom-5 opacity-15 z-1 -rotate-[50deg]">
        <img src={shape} alt="" />
      </div>
      <div className="hidden lg:block max-w-[307px] absolute right-0 -top-36 opacity-15 z-1 -rotate-[170deg]">
        <img src={shape} alt="" />
      </div>
    </footer>
  );
}
