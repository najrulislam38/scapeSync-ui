import Container from "@/components/Shared/Container";
import SectionDescription from "@/components/Shared/SectionDescription";
import SectionTitle from "@/components/Shared/SectionTitle";
import frame from "./../../assets/images/Frame 2147227474.png";
import BookService from "./Features/BookService";
import StreamlineOperations from "./Features/StreamlineOperations";
import SeeTask from "./Features/SeeTask";
import { motion } from "motion/react";

export default function Features() {
  return (
    <div className="py-10 md:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className=" md:mb-20 mb-10"
        >
          <div className="relative max-w-3xl mx-auto">
            <SectionTitle title="Build for Everyone" />
            <img
              src={frame}
              alt=""
              className="absolute bottom-2 left-1/2 -z-2 w-2/6"
            />
          </div>
          <SectionDescription description="Whether you're booking services, managing tasks, or running operations, we've designed the perfect experience for you." />
          <div className="space-y-10">
            <BookService />
            <StreamlineOperations />
            <SeeTask />
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
