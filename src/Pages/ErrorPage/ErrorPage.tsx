import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <div>
        <h3 className="text-center text-3xl font-bold mb-6">
          Something was wrong!
        </h3>
        <Link to={"/"} className="block w-fit mx-auto  text-center ">
          <Button className="">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
