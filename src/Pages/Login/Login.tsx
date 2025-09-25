/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import logo from "./../../assets/images/image 7.svg";
import { Link, useNavigate } from "react-router";
import googleImg from "./../../assets/images/google.png";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "@/lib/axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),

  remember_me: z.boolean().optional(),
});

export default function Login() {
  const [showPass, setShowPass] = useState<true | false>(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember_me: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      const res = await axiosInstance.post("/login", values);
      if (
        res?.status === 200 ||
        res?.data?.status === true ||
        res?.data?.data?.status === true
      ) {
        toast.success("Login Successfully");
        navigate("/");
      }
    } catch (error: any) {
      toast.error(`${error?.message}`);
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen">
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt="logo"
        loading="lazy"
        className="py-6 px-8  cursor-pointer"
      />
      <div className="w-full h-fit mt-20 flex items-center justify-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
            Welcome to ScapeSync
          </h2>
          <p className="text-gray-600 text-center">
            Please share your login details so you can access the website.
          </p>
          <div className="max-w-[480px]  mx-auto mt-10">
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative z-0 w-full mb-5 group py-3">
                  <input
                    type="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-normal text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
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

                <div className="flex items-center justify-between">
                  <div className=" items-center space-x-3 ">
                    <input
                      type="checkbox"
                      id="remember_me"
                      className=" h-4 w-4 border-1 border-gray-900 
               checked:bg-primary checked:border-primary 
               flex items-center justify-center cursor-pointer
               transition-all duration-200"
                      {...register("remember_me")}
                    />
                    <span className="text-sm text-gray-900">Remember me</span>

                    {errors.remember_me && (
                      <p className="text-red-500 text-xs">
                        {errors.remember_me.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Link
                      to={"/forgot-password"}
                      className="text-primary text-sm font-semibold hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>

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
                Don’t have an account?{" "}
                <Link to="/get-started" className="text-green-600 font-medium">
                  Get started
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
