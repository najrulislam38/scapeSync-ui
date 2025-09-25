import { Button } from "@/components/ui/button";
import logo from "./../../assets/images/image 7.svg";
import successImg from "./../../assets/images/success.png";
import { Link, useNavigate } from "react-router";

export default function AccountCreatedSuccessful() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-dvh">
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt="logo"
        loading="lazy"
        className="py-6 px-8  cursor-pointer"
      />
      <div>
        <div className="max-w-[480px] mx-auto">
          <img src={successImg} alt="success image" className="w-fit mx-auto" />

          <h2 className="text-center text-gray-900 font-bold text-3xl my-4">
            Password Changed Successfully!
          </h2>
          <p className="text-gray-600 text-center">
            Your account is set up! Just verify your email to get started.
          </p>

          <Link to={"/login"} className="">
            <Button className="text-center w-full mt-10">Go To Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
