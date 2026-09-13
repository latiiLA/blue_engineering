import { Link } from "react-router-dom";
import { BrandLogo } from "@/components/BrandLogo";
import { Container } from "@/components/layout/Container";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  const footerNav = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Team", to: "/about/team" },
    { label: "Services", to: "/services" },
    { label: "Categories", to: "/services/categories" },
    { label: "Projects", to: "/#projects" },
    { label: "Contact", to: "/#contact" },
  ];

  return (
    <footer className="bg-[#050b10] text-white">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <BrandLogo imgClassName="h-11 sm:h-12" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
            {site.tagline}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1c9cf0]">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {footerNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm font-medium text-white/60 transition-colors hover:text-[#ff7f27]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1c9cf0]">
            Office
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/55">
            <li>{site.contact.address}</li>
            <li className="text-white/40">BD: {site.contact.bdOffice}</li>
            <li>
              <a
                href={`tel:${site.contact.phone.replace(/\s|-/g, "")}`}
                className="hover:text-white"
              >
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="hover:text-white"
              >
                {site.contact.email}
              </a>
            </li>
            <li>{site.contact.hours}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.brand}
          </p>
          <p>
            Built by{" "}
            <a
              href="https://latiila.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 transition-colors hover:text-[#1c9cf0]"
            >
              latiila
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
