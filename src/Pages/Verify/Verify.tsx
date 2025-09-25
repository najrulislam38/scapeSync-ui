/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router";
import logo from "./../../assets/images/image 7.svg";
import { FaChevronLeft } from "react-icons/fa";
import VerifyOtpField from "@/components/VerifyOtpField";
import { useState } from "react";
import { axiosInstance } from "@/lib/axios";
import toast from "react-hot-toast";

export default function Verify() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string | null>(null);

  const handleOnChangeOtp = (value: string) => {
    setOtp(value);
  };

  interface OtpPayload {
    otp: string;
  }

  const handleSubmitOtp = async (value: OtpPayload | null): Promise<void> => {
    try {
      const res = await axiosInstance.post("/verify_otp", value);
      if (
        res?.status === 200 ||
        res?.data?.status === true ||
        res?.data?.data?.status === true
      ) {
        toast.success("Otp Verified successfully");
        navigate("/created-successful");
      }
    } catch (error: any) {
      toast.error(`${error?.message}`);
      console.log(error);
    }
  };

  const handleResendOtp = async () => {
    try {
      const res = await axiosInstance.post("/resend_otp");
      if (
        res?.status === 201 ||
        res?.data?.status === 201 ||
        res?.data?.data?.status === 201
      ) {
        toast.success("Otp Resend successful");
      }
    } catch (error: any) {
      console.log(error?.message);
    }
  };
  return (
    <div className="w-full h-dvh relative">
      <img
        src={logo}
        alt="logo"
        loading="lazy"
        className="py-6 px-8 absolute top-6 left-8 "
      />
      <div className="h-full w-full flex justify-center items-center">
        <form className="max-w-[480px] mx-auto">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-primary font-semibold flex gap-1 items-center justify-start cursor-pointer hover:gap-2 hover:transition-all duration-300"
          >
            <FaChevronLeft />
            Back
          </button>
          <h3 className="text-3xl font-bold text-center text-gray-900 mt-6 mb-2">
            Please check your email!
          </h3>
          <p className="text-gray-600 leading-6 mb-10">
            We've emailed a 6-digit confirmation code to acb@domain, please
            enter the code in below box to verify your email.
          </p>
          <VerifyOtpField handleOnChangeOtp={handleOnChangeOtp} />
          <button
            type="button"
            onClick={() => handleSubmitOtp(otp ? { otp } : null)}
            className="w-full my-10 block text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-normal px-5 py-2.5 text-center  "
          >
            Reset Password
          </button>

          <p className="text-center text-sm text-gray-600 mt-4 font-medium">
            Already have an account?{" "}
            <button
              onClick={handleResendOtp}
              className="text-primary font-medium cursor-pointer hover:text-green-700"
            >
              Resend Code
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
