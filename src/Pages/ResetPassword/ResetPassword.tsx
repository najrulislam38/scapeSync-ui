/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import logo from "./../../assets/images/image 7.svg";
import { useNavigate } from "react-router";
import { FaChevronLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "@/lib/axios";
import toast from "react-hot-toast";
import { useState } from "react";

const resetPassSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    password_confirmation: z.string(),
    token: z.string().optional(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

export default function ResetPassword() {
  const [showPass, setShowPass] = useState<true | false>(false);
  const [showConfirmPass, setShowConfirmPass] = useState<true | false>(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof resetPassSchema>>({
    resolver: zodResolver(resetPassSchema),
  });

  const onSubmit = async (values: z.infer<typeof resetPassSchema>) => {
    try {
      const res = await axiosInstance.post("/reset-password", values);
      if (
        res?.status === 200 ||
        res?.status === 201 ||
        res?.data?.status === 201 ||
        res?.data?.data?.status === 201
      ) {
        toast.success("Password Reset Successful");
        navigate("/reset-successful");
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
        onClick={() => navigate("/")}
        alt="logo"
        loading="lazy"
        className="py-6 px-8 absolute top-6 left-8  cursor-pointer "
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
            Enter your new password.
          </h3>
          <p className="text-gray-600 leading-6 mb-10">
            Please enter the email address associated with your account, and
            we'll email you a link to reset your password.
          </p>
          <div className="relative z-0 w-full mb-5 group py-3">
            <input
              type={`${showPass ? "text" : "password"}`}
              id="password"
              className="block py-2.5 px-0 w-full text-normal text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              {...register("password")}
            />
            {!showPass ? (
              <FaEye
                onClick={() => setShowPass(true)}
                className=" absolute top-5 right-5 text-xl cursor-pointer hover:text-primary hover:transition-all duration-200"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPass(false)}
                className=" absolute top-5 right-5 text-xl cursor-pointer hover:text-primary hover:transition-all duration-200"
              />
            )}
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              New Password
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group py-3">
            <input
              type={`${showConfirmPass ? "text" : "password"}`}
              id="password_confirmation"
              className="block py-2.5 px-0 w-full text-normal text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=" "
              {...register("password_confirmation")}
            />
            {!showConfirmPass ? (
              <FaEye
                onClick={() => setShowConfirmPass(true)}
                className=" absolute top-5 right-5 text-xl cursor-pointer hover:text-primary hover:transition-all duration-200"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowConfirmPass(false)}
                className=" absolute top-5 right-5 text-xl cursor-pointer hover:text-primary hover:transition-all duration-200"
              />
            )}
            {errors.password_confirmation && (
              <p className="text-red-500 text-xs">
                {errors.password_confirmation.message}
              </p>
            )}
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full my-10 block text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-normal px-5 py-2.5 text-center  "
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}
