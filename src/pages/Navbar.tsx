import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/BrandLogo";
import { Container } from "@/components/layout/Container";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";

type NavbarProps = {
  overlay?: boolean;
};

const Navbar = ({ overlay = false }: NavbarProps) => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onPointer = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, []);

  const solid = !overlay || scrolled || open || pathname !== "/";

  const linkClass = (active: boolean) =>
    cn(
      "px-3.5 py-2 text-[13px] font-semibold tracking-wide transition-colors",
      active ? "text-[#1c9cf0]" : "text-white/70 hover:text-white"
    );

  return (
    <nav
      ref={navRef}
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-white/10 bg-[#071018]/95 backdrop-blur-md"
          : "border-b border-transparent bg-[#071018]/45 backdrop-blur-sm"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <BrandLogo imgClassName="h-9 sm:h-10" />
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {site.nav.map((item) => {
            if (item.type === "dropdown") {
              const childActive = item.children.some((c) =>
                pathname === c.to || pathname.startsWith(`${c.to}/`)
              );
              const isOpen = openMenu === item.label;
              return (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    className={cn(
                      linkClass(childActive),
                      "inline-flex items-center gap-1"
                    )}
                    onClick={() =>
                      setOpenMenu(isOpen ? null : item.label)
                    }
                    onMouseEnter={() => setOpenMenu(item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {isOpen && (
                    <div
                      className="absolute top-full left-0 z-50 min-w-[12rem] pt-2"
                      onMouseLeave={() => setOpenMenu(null)}
                    >
                      <div className="rounded-xl border border-white/10 bg-[#0c1620] py-2 shadow-xl">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.to}
                            to={child.to}
                            end={child.to === item.to}
                            className={({ isActive }) =>
                              cn(
                                "block px-4 py-2.5 text-sm transition-colors",
                                isActive
                                  ? "bg-white/5 text-[#1c9cf0]"
                                  : "text-white/70 hover:bg-white/5 hover:text-white"
                              )
                            }
                            onClick={() => setOpenMenu(null)}
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            if (item.type === "hash") {
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={linkClass(false)}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <NavLink
                key={item.label}
                to={item.to}
                end
                className={({ isActive }) => linkClass(isActive)}
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>

        <div className="hidden items-center lg:flex">
          <Button
            asChild
            className="rounded-full bg-[#1c9cf0] px-5 text-[13px] font-semibold text-white hover:bg-[#ff7f27]"
          >
            <Link to="/#contact">Get a quote</Link>
          </Button>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-[#071018] transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 border-t-0 opacity-0"
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {site.nav.map((item) => {
            if (item.type === "dropdown") {
              const expanded = mobileExpanded === item.label;
              return (
                <div key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-1 py-3 text-base font-semibold text-white/80"
                    onClick={() =>
                      setMobileExpanded(expanded ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform",
                        expanded && "rotate-180"
                      )}
                    />
                  </button>
                  {expanded && (
                    <div className="mb-2 ml-3 flex flex-col border-l border-white/10 pl-3">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          end={child.to === item.to}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            cn(
                              "py-2.5 text-sm",
                              isActive ? "text-[#1c9cf0]" : "text-white/65"
                            )
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (item.type === "hash") {
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-1 py-3 text-base font-semibold text-white/80"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <NavLink
                key={item.label}
                to={item.to}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-1 py-3 text-base font-semibold",
                    isActive ? "text-[#1c9cf0]" : "text-white/80"
                  )
                }
              >
                {item.label}
              </NavLink>
            );
          })}
          <Link
            to="/#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-[#1c9cf0] px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Get a quote
          </Link>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
