import Container from "@/components/Shared/Container";
import logo from "./../../assets/images/image 7.svg";
import SectionTitle from "@/components/Shared/SectionTitle";
import SectionDescription from "@/components/Shared/SectionDescription";
import clientImg from "./../../assets/images/Illustration.png";
import businessManImg from "./../../assets/images/Group.png";
import { Link } from "react-router";

export default function GetStart() {
  return (
    <div className="w-full min-h-dvh flex items-center justify-center">
      <Container>
        <div>
          <img
            src={logo}
            alt="logo"
            loading="lazy"
            className="max-w-[150px] mx-auto mb-6"
          />
          <SectionTitle title="Who are you?" />
          <SectionDescription description="Choose the option that best describes you so we can tailor your experience." />
          <div className="flex flex-col md:flex-row gap-5 my-20 md:my-30">
            <Link to={"/register"}>
              <div className="border  bg-[#F9FAFB] rounded-lg py-5 px-9 text-center group hover:bg-primary/10 hover:transition-all duration-200 cursor-pointer hover:border-primary">
                <img
                  src={clientImg}
                  alt="client image"
                  loading="lazy"
                  className="w-[100px] h-[100px] mx-auto"
                />
                <h3 className="text-2xl font-semibold mt-5 mb-1 group-hover:text-primary transition duration-200">
                  I'm a Client
                </h3>
                <p className="max-w-[242px] text-sm font-semibold text-gray-600 group-hover:text-primary transition duration-200">
                  Discover services & track projects effortlessly.
                </p>
              </div>
            </Link>
            <Link to={"/register"}>
              <div className="border bg-[#F9FAFB] rounded-lg py-5 px-9 text-center group hover:bg-primary/10 transition-all duration-200 cursor-pointer hover:border-primary">
                <img
                  src={businessManImg}
                  alt="client image"
                  loading="lazy"
                  className="w-[100px] h-[100px] mx-auto"
                />
                <h3 className="text-2xl font-semibold mt-5 mb-1 group-hover:text-primary transition duration-200">
                  I'm a Client
                </h3>
                <p className="max-w-[242px] text-sm font-semibold text-gray-600 group-hover:text-primary transition duration-200">
                  Discover services & track projects effortlessly.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
