import Container from "@/components/Shared/Container";
import SectionDescription from "@/components/Shared/SectionDescription";
import SectionTitle from "@/components/Shared/SectionTitle";
import { motion } from "motion/react";

export default function FAQ() {
  return (
    <div className="py-10 md:py-20 lg:pb-[160px]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionTitle title="Frequently Asked Questions" />
          <SectionDescription description="Quick answers to help you get the most out of our app." />
        </motion.div>
        <div className="max-w-[996px] mx-auto mt-8 md:mt-16">
          <div className="flow-root">
            <div className=" flex flex-col gap-4 divide-y divide-gray-200">
              <motion.details
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 * 0.2 }}
                viewport={{ once: true }}
                className="group p-6 [&_summary::-webkit-details-marker]:hidden border"
                open
              >
                <summary className="flex items-center justify-between gap-1.5 text-gray-900">
                  <h2 className="font-semibold">Is the app free to use?</h2>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="block size-5 shrink-0 group-open:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden size-5 shrink-0 group-open:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </summary>

                <p className="pt-4 text-gray-600 text-sm">
                  Yes! We offer a free plan for individuals and small teams.
                  Paid plans unlock more features for scaling businesses.
                </p>
              </motion.details>

              <motion.details
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2 * 0.2 }}
                viewport={{ once: true }}
                className="group p-6 [&_summary::-webkit-details-marker]:hidden border"
              >
                <summary className="flex items-center justify-between gap-1.5 text-gray-900">
                  <h2 className="font-semibold">
                    Can I assign multiple employees to one job?
                  </h2>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="block size-5 shrink-0 group-open:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden size-5 shrink-0 group-open:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </summary>

                <p className="pt-4 text-gray-600 text-sm">
                  Yes! We offer a free plan for individuals and small teams.
                  Paid plans unlock more features for scaling businesses.
                </p>
              </motion.details>

              <motion.details
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3 * 0.2 }}
                viewport={{ once: true }}
                className="group p-6 [&_summary::-webkit-details-marker]:hidden border"
              >
                <summary className="flex items-center justify-between gap-1.5 text-gray-900">
                  <h2 className="font-semibold">
                    Does it work on both mobile and desktop?
                  </h2>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="block size-5 shrink-0 group-open:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden size-5 shrink-0 group-open:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </summary>

                <p className="pt-4 text-gray-600 text-sm">
                  Yes! We offer a free plan for individuals and small teams.
                  Paid plans unlock more features for scaling businesses.
                </p>
              </motion.details>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
