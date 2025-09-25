/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router";
import logo from "./../../assets/images/image 7.svg";
import { FaChevronLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { axiosInstance } from "@/lib/axios";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const navigate = useNavigate();

  type ForgotPasswordForm = { email: string };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>();

  const onSubmit = async (values: { email: string }) => {
    try {
      const res = await axiosInstance.post("/resend_otp", values);
      if (
        res?.status === 200 ||
        res?.status === 201 ||
        res?.data?.status === 201 ||
        res?.data?.data?.status === 201
      ) {
        toast.success("Otp Sent");
        navigate("/verify-otp");
      }
    } catch (error: any) {
      toast.error(`${error?.message}`);
      console.log(error);
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[480px] mx-auto"
        >
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-primary font-semibold flex gap-1 items-center justify-start cursor-pointer hover:gap-2 hover:transition-all duration-300"
          >
            <FaChevronLeft />
            Back
          </button>
          <h3 className="text-3xl font-bold text-center text-gray-900 mt-6 mb-2">
            Forgot your password?
          </h3>
          <p className="text-gray-600 leading-6 mb-10">
            Please enter the email address associated with your account, and
            we'll email you a link to reset your password.
          </p>
          <div className="relative z-0 w-full mb-5 group py-3">
            <input
              type="email"
              id="email"
              className="block py-2.5 px-0 w-full text-normal text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter email
            </label>
          </div>
          <button
            type="submit"
            className="w-full my-10 block text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-normal px-5 py-2.5 text-center  "
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
