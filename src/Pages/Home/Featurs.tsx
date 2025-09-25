import Container from "@/components/Shared/Container";
import SectionDescription from "@/components/Shared/SectionDescription";
import SectionTitle from "@/components/Shared/SectionTitle";
import frame from "./../../assets/images/Frame 2147227474.png";
import BookService from "./Features/BookService";
import StreamlineOperations from "./Features/StreamlineOperations";
import SeeTask from "./Features/SeeTask";

export default function Features() {
  return (
    <div className="py-10 md:py-20">
      <Container>
        <div className=" md:mb-20 mb-10">
          <div className="relative">
            <SectionTitle title="Build for Everyone" />
            <img
              src={frame}
              alt=""
              className="absolute bottom-2 left-1/2 -z-2"
            />
          </div>
          <SectionDescription description="Whether you're booking services, managing tasks, or running operations, we've designed the perfect experience for you." />
          <div className="space-y-10">
            <BookService />
            <StreamlineOperations />
            <SeeTask />
          </div>
        </div>
      </Container>
    </div>
  );
}
