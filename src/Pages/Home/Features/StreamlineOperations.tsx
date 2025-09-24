import featureImage from "./../../../assets/images/Features/Rectangle 161124261.png";
import RoleRound from "@/components/Shared/RoleRound";

export default function StreamlineOperations() {
  return (
    <div className="w-full flex md:flex-row-reverse flex-col  items-center gap-10 mt-10">
      <div className="w-full md:w-1/2">
        <RoleRound role="Business Owners" />
        <h3 className="text-xl md:text-2xl text-gray-900 font-bold leading-7 my-4">
          Assign jobs, monitor performance, and streamline operations.
        </h3>
        <p className="text-gray-600 md:text-lg max-w-[523px] ">
          Gain full control of your workforce with real-time tracking, smart
          scheduling, and service management in one app.
        </p>

        <ul className="space-y-2 my-9">
          <li className="border-l-2 border-primary pl-4 md:text-lg font-medium">
            Assign jobs to the right team member
          </li>
          <li className="border-l-2 border-primary/70 pl-4 md:text-lg font-medium">
            Monitor performance in real time
          </li>
          <li className="border-l-2 border-primary/50 pl-4 md:text-lg font-medium">
            Manage clients and services seamlessly
          </li>
        </ul>
      </div>
      <div className="relative w-full md:w-1/2">
        <img
          src={featureImage}
          alt="Book Service feature image"
          className="w-fit"
        />
        <div className="h-1/5 w-full z-20 bg-linear-to-t from-[#FCFFFC] to-transparent absolute right-0 bottom-0"></div>
      </div>
    </div>
  );
}
