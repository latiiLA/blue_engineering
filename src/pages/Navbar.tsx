import { Button } from "@/components/ui/button";
import bluelogo from "../assets/bluelogo.png";

const Navbar = () => {
  return (
    <div className="mr-40 ml-40">
      <div className="flex flex-row items-center justify-between">
        <img src={bluelogo} className="h-20" />
        <div className="flex items-center font-bold mr-25">
          <Button
            variant="link"
            className="flex items-center text-lg text-dark dark:text-white"
          >
            <span className="text-bold">HOME</span>
          </Button>
          <Button
            variant="link"
            className="flex items-center text-lg text-dark dark:text-white"
          >
            <span>ABOUT US</span>
          </Button>
          <Button
            variant="link"
            className="flex items-center text-lg text-dark dark:text-white"
          >
            <span>PROJECTS</span>
          </Button>
          <Button
            variant="link"
            className="flex items-center text-lg text-dark dark:text-white"
          >
            <span>SERVICES</span>
          </Button>
          <Button
            variant="link"
            className="flex items-center text-lg text-dark dark:text-white"
          >
            <span>CONTACT</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
