import Root from "@/components/layout/Root";
import GetStart from "@/Pages/GetStart/GetStart";
import Home from "@/Pages/Home/Home";
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
    ],
  },
]);

export default router;
