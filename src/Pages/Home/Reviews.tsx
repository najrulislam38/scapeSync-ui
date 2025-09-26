import Container from "@/components/Shared/Container";
import SectionDescription from "@/components/Shared/SectionDescription";
import SectionTitle from "@/components/Shared/SectionTitle";

import reviewer1 from "./../../assets/images/reviewers/Ellipse1.png";
import reviewer2 from "./../../assets/images/reviewers/Ellipse2.png";
import reviewer3 from "./../../assets/images/reviewers/Ellipse3.png";
import { motion } from "motion/react";

export default function Reviews() {
  return (
    <div className="py-10 md:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SectionTitle title="What Our Users Are Saying" />
          <SectionDescription description="Real stories from clients, employees, and business owners who use our app every day." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center mt-16 ">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }}
              className=" min-h-[208px] p-7 bg-white shadow-lg shadow-[#F6FCF5]"
            >
              <div className=" flex gap-4 items-center">
                <div className="w-12 h-12">
                  <img
                    src={reviewer2}
                    alt="Reviewers Image"
                    className="w-full object-center"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold leading-[100%] pb-1">Farzan H.</h4>
                  <p className="text-sm text-gray-600 ">
                    Owner, CleanPro Services
                  </p>
                </div>{" "}
              </div>
              <p className="text-gray-600 leading-7  my-7 max-w-[340px]">
                This app completely changed the way we manage our team.
                Assigning jobs takes minutes, and we never miss an update.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 * 0.2 }}
              viewport={{ once: true }}
              className=" min-h-[208px] p-7 bg-white shadow-lg shadow-[#F6FCF5]"
            >
              <div className=" flex gap-4">
                <div className="w-12 h-12">
                  <img
                    src={reviewer1}
                    alt="Reviewers Image"
                    className="w-full object-center"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold leading-[100%] pb-1">Ahmed R.</h4>
                  <p className="text-sm text-gray-600 ">Technician</p>
                </div>{" "}
              </div>
              <p className="max-w-[340px] text-gray-600 leading-7  my-7 ">
                I love how easy it is to see my daily tasks and track my time.
                It makes my job stress-free.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3 * 0.2 }}
              viewport={{ once: true }}
              className=" min-h-[208px] p-7 bg-white shadow-lg shadow-[#F6FCF5]"
            >
              <div className=" flex gap-4 items-center">
                <div className="w-12 h-12">
                  <img
                    src={reviewer3}
                    alt="Reviewers Image"
                    className="w-full object-center"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold leading-[100%] pb-1">Farzan H.</h4>
                  <p className="text-sm text-gray-600 ">
                    Owner, CleanPro Services
                  </p>
                </div>{" "}
              </div>
              <p className="text-gray-600 leading-7 max-w-[340px] my-7">
                This app completely changed the way we manage our team.
                Assigning jobs takes minutes, and we never miss an update.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
