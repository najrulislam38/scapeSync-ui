/* eslint-disable @typescript-eslint/no-explicit-any */
import logo from "./../../assets/images/image 7.svg";
import googleImg from "../../assets/images/google.png";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router";
import { axiosInstance } from "@/lib/axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const registerSchema = z
  .object({
    first_name: z.string().min(1, { error: "First name is required" }),
    last_name: z.string().optional(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    password_confirmation: z.string(),
    terms: z.literal(true, {
      message: "You must accept terms and conditions",
    }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

export default function Register() {
  const [showPass, setShowPass] = useState<true | false>(false);
  const [showConfirmPass, setShowConfirmPass] = useState<true | false>(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof register>) => {
    try {
      console.log(values);
      const res = await axiosInstance.post("/register", values);

      console.log(res);

      if (
        res?.status === 201 ||
        res?.data?.status === 201 ||
        res?.data?.data?.status === 201
      ) {
        toast.success("Created Successful");
        navigate("/verify-otp");
      }
    } catch (error: any) {
      toast.error(`${error?.message}`);
      console.log(error);
    }
  };

  return (
    <div>
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt="logo"
        loading="lazy"
        className="py-6 px-8 w-fit cursor-pointer"
      />

      <div className="mt-16 mb-20">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Create your Account
        </h2>
        <p className="text-gray-600 text-center">
          When sports Meets smart Tech.
        </p>
        <div className="max-w-[480px]  mx-auto mt-10">
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 md:gap-6 py-3">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    id="first_name"
                    className="block py-2.5 px-0 w-full text-normal text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    {...register("first_name")}
                  />
                  {errors.first_name && (
                    <p className="text-red-500 text-xs">
                      {errors?.first_name?.message}
                    </p>
                  )}
                  <label
                    htmlFor="first_name"
                    className="peer-focus:font-medium absolute text-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    id="last_name"
                    className="block py-2.5 px-0 w-full text-normal text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    {...register("last_name")}
                  />
                  {errors.last_name && (
                    <p className="text-red-500 text-xs">
                      {errors?.last_name?.message}
                    </p>
                  )}
                  <label
                    htmlFor="last_name"
                    className="peer-focus:font-medium absolute text-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group py-3">
                <input
                  type="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-normal text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
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
                    className=" absolute top-3 right-5 text-xl cursor-pointer hover:text-primary hover:transition-all duration-200"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => setShowPass(false)}
                    className=" absolute top-3 right-5 text-xl cursor-pointer hover:text-primary hover:transition-all duration-200"
                  />
                )}
                {errors.password && (
                  <p className="text-red-500 text-xs">
                    {errors.password.message}
                  </p>
                )}
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute text-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              <div className="relative z-0 w-full mb-10 group">
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
                    className=" absolute top-3 right-5 text-xl cursor-pointer hover:text-primary hover:transition-all duration-200"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => setShowConfirmPass(false)}
                    className=" absolute top-3 right-5 text-xl cursor-pointer hover:text-primary hover:transition-all duration-200"
                  />
                )}
                {errors.password_confirmation && (
                  <p className="text-red-500 text-xs">
                    {errors.password_confirmation.message}
                  </p>
                )}
                {errors.password_confirmation && (
                  <p className="text-red-500 text-xs">
                    {errors.password_confirmation.message}
                  </p>
                )}
                <label
                  htmlFor="password_confirmation"
                  className="peer-focus:font-medium absolute text-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm password
                </label>
              </div>

              <div className="flex items-center gap-3 ">
                <input
                  type="checkbox"
                  id="terms"
                  className=" h-4 w-4 border-1 border-gray-900 
               checked:bg-primary checked:border-primary 
               flex items-center justify-center cursor-pointer
               transition-all duration-200"
                  {...register("terms")}
                />
                <p className="text-sm text-gray-900">
                  I agree to Tech Takes Terms of Service and Privacy Policy.
                </p>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-xs">{errors.terms.message}</p>
              )}

              <button
                type="submit"
                className="w-full my-10 block text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none font-medium rounded-lg text-normal px-5 py-2.5 text-center cursor-pointer"
              >
                Submit
              </button>
            </form>
            <hr />

            <div className=" my-10 py-2">
              <div className="flex gap-5 justify-center items-center w-full mx-auto border rounded-lg py-1 px-3 cursor-pointer">
                <img src={googleImg} alt="" className="w-9" />
                <span className="text-medium font-Poppins">
                  Login With Google
                </span>
              </div>
            </div>

            <p className="text-center text-sm text-gray-600 mt-4 font-medium">
              Already have an account?{" "}
              <Link to="/login" className="text-green-600 font-medium">
                Please Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
