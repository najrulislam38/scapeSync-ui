import { Link } from "react-router";
import navImage from "./../../assets/images/image 7.svg";
import { Button } from "@/components/ui/button";
import Container from "@/components/Shared/Container";

export default function Navbar() {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center p-4 ">
          <Link to={"/"}>
            <img src={navImage} alt="" />
          </Link>
          <Link to={"/get-started"}>
            <Button> Get Start</Button>
          </Link>
        </div>
      </Container>
    </header>
  );
}
