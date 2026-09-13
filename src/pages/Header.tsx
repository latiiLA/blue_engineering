import { Container } from "@/components/layout/Container";
import { site } from "@/data/site";
import { FaFacebookF } from "react-icons/fa";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const socialIcons = {
  facebook: FaFacebookF,
  x: FaXTwitter,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  youtube: FaYoutube,
};

const Header = () => {
  return (
    <div className="relative z-[60] bg-[#071018] text-[11px] text-white/70">
      <Container className="flex h-9 items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4 sm:gap-6">
          <a
            href={`mailto:${site.contact.email}`}
            className="truncate transition-colors hover:text-white"
          >
            {site.contact.email}
          </a>
          <a
            href={`tel:${site.contact.phone.replace(/\s|-/g, "")}`}
            className="hidden transition-colors hover:text-white sm:inline"
          >
            {site.contact.phone}
          </a>
          <span className="hidden text-white/40 md:inline">
            {site.contact.location}
          </span>
        </div>

        <div className="flex items-center gap-1">
          {site.social.map((item) => {
            const Icon = socialIcons[item.icon];
            return (
              <a
                key={item.name}
                href={item.href}
                aria-label={item.name}
                className="grid size-7 place-items-center text-white/50 transition-colors hover:text-[#1c9cf0]"
                onClick={(e) => {
                  if (item.href === "#") e.preventDefault();
                }}
              >
                <Icon className="size-3" />
              </a>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Header;
