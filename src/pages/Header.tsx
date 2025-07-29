import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{ backgroundColor: "#1c9cf0" }}
      className="p-2 text-white dark:text-black"
    >
      <div className="flex flex-row items-center justify-between ml-40 mr-40">
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>
            <Button
              variant="link"
              asChild
              className="flex items-center gap-2  text-white hover:underline"
            >
              <Link to="mailto:info@blueethio.com">
                <Mail className="h-4 w-4 text-white" />
                info@blueethio.com
              </Link>
            </Button>
          </div>
          <Separator orientation="vertical" />

          <div>
            <Button variant="ghost" className="flex items-center">
              <PhoneCall />
              <span>+251-911-41-6595</span>
            </Button>
          </div>
          <Separator orientation="vertical" />
          <div>
            <Button variant="ghost">
              <Link
                to="mailto:info@blueethio.com"
                className="flex items-center gap-1"
              >
                <MapPin />
                <span>Addis Ababa, Ethiopia</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <Button variant="link" className="p-2">
            <Link to="mailto:info@blueethio.com">
              <FaFacebookF className="text-white" />
            </Link>
          </Button>

          <Button variant="link" className="p-2">
            <Link to="mailto:info@blueethio.com">
              <FaXTwitter className="text-white" />
            </Link>
          </Button>

          <Button variant="link" className="p-2">
            <Link to="mailto:info@blueethio.com">
              <FaLinkedinIn className="text-white" />
            </Link>
          </Button>

          <Button variant="link" className="p-2">
            <Link to="mailto:info@blueethio.com">
              <FaInstagram className="text-white" />
            </Link>
          </Button>

          <Button variant="link" className="p-2">
            <Link to="mailto:info@blueethio.com">
              <FaYoutube className="text-white" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
