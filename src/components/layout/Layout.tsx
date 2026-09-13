import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/pages/Header";
import Navbar from "@/pages/Navbar";
import { Footer } from "@/components/sections/Footer";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 80);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <ScrollManager />
      <Header />
      <Navbar overlay={isHome} />
      <Outlet />
      <Footer />
    </>
  );
}
