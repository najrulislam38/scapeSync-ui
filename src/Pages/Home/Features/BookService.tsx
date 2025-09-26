import featureImage1 from "./../../../assets/images/Features/Rectangle 161124259.png";
import RoleRound from "@/components/Shared/RoleRound";
import { motion } from "motion/react";

export default function BookService() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-10 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2"
      >
        <RoleRound role="Users" />
        <h3 className="text-xl md:text-2xl text-gray-900 font-bold leading-7 my-4">
          Book services, track progress <br /> and stay updated
        </h3>
        <p className="text-gray-600 md:text-lg max-w-[523px] ">
          Easily schedule appointments, get real-time updates, and enjoy a
          smooth, transparent service experience.
        </p>

        <ul className="space-y-2 my-9">
          <li className="border-l-2 border-primary pl-4 md:text-lg font-medium">
            Book services in seconds
          </li>
          <li className="border-l-2 border-primary/70 pl-4 md:text-lg font-medium">
            Track real-time job updates
          </li>
          <li className="border-l-2 border-primary/50 pl-4 md:text-lg font-medium">
            Schedule appointments at your convenience
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50, x: 50 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.6, delay: 2 * 0.2 }}
        viewport={{ once: true }}
        className="relative w-full md:w-1/2"
      >
        <img
          src={featureImage1}
          alt="Book Service feature image"
          className="w-fit"
          loading="lazy"
        />
        <div className="h-1/5 w-full z-20 bg-linear-to-t from-[#FCFFFC] to-transparent absolute right-0 bottom-0"></div>
      </motion.div>
    </div>
  );
}
