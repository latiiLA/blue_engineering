import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { site } from "@/data/site";

const ticker = [
  "MV / LV Power Lines",
  "Renewable Systems",
  "Electromechanical Install",
  "Solar Water Pumps",
  "Productive-Use Technology",
  "Commissioning & Maintenance",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative -mt-[4.5rem] flex min-h-[100svh] flex-col overflow-hidden bg-[#071018]"
    >
      <img
        src={site.heroImage}
        alt=""
        className="animate-hero-zoom absolute inset-0 size-full object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(115deg,rgba(7,16,24,0.94)_0%,rgba(7,16,24,0.62)_45%,rgba(7,16,24,0.25)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#071018] via-transparent to-[#071018]/40"
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 flex-col justify-end pb-8 pt-36 sm:pb-10 sm:pt-44">
        <Container className="w-full">
          <div className="max-w-3xl">
            <p className="animate-hero-rise text-sm font-semibold tracking-[0.28em] text-[#1c9cf0] uppercase">
              Addis Ababa, Ethiopia
            </p>
            <h1 className="animate-hero-rise-delay mt-5 font-display text-[clamp(2.75rem,9vw,5.75rem)] font-extrabold leading-[0.95] tracking-tight text-white">
              <span className="text-[#1c9cf0]">Blue</span> Engineering
              <span className="mt-1 block text-[#ff7f27]">&amp; Trade</span>
            </h1>
            <p className="animate-hero-rise-delay-2 mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              {site.heroSupport}
            </p>
            <div className="animate-hero-rise-delay-2 mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/#contact"
                className="inline-flex items-center rounded-full bg-[#1c9cf0] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#ff7f27]"
              >
                Request a quote
              </Link>
              <Link
                to="/#projects"
                className="inline-flex items-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white/90 transition-colors hover:border-[#ff7f27] hover:text-[#ff7f27]"
              >
                View projects
              </Link>
            </div>
          </div>
        </Container>

        <div className="mt-14 border-t border-white/10 bg-black/25 backdrop-blur-sm">
          <div className="relative overflow-hidden py-4">
            <div className="animate-ticker flex w-max gap-10 whitespace-nowrap px-5 text-sm font-medium tracking-wide text-white/55">
              {[...ticker, ...ticker].map((item, i) => (
                <span key={`${item}-${i}`} className="inline-flex items-center gap-10">
                  <span>{item}</span>
                  <span className="size-1.5 rounded-full bg-[#ff7f27]" aria-hidden />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
