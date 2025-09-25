import Root from "@/components/layout/Root";
import AccountCreatedSuccessful from "@/Pages/AccountCreatedSuccessful/AccountCreatedSuccessful";
import ForgotPassword from "@/Pages/ForgotPassword/ForgotPassword";
import GetStart from "@/Pages/GetStart/GetStart";
import Home from "@/Pages/Home/Home";
import Login from "@/Pages/Login/Login";
import Register from "@/Pages/Register/Register";
import Verify from "@/Pages/Verify/Verify";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/get-started",
        Component: GetStart,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/verify-otp",
        Component: Verify,
      },
      {
        path: "/forgot-password",
        Component: ForgotPassword,
      },
      {
        path: "/created-successful",
        Component: AccountCreatedSuccessful,
      },
    ],
  },
]);

export default router;
