import Root from "@/components/layout/Root";
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
    ],
  },
]);

export default router;
