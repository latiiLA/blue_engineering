import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { site } from "@/data/site";

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-[#f3f1ec] py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute -left-4 top-8 select-none font-display text-[clamp(5rem,18vw,14rem)] font-extrabold leading-none text-[#071018]/[0.035]"
        aria-hidden
      >
        About
      </div>

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-[#1c9cf0] uppercase">
              Who we are
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#071018] sm:text-5xl">
              Engineering that connects power to progress
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#071018]/70 sm:text-lg">
              {site.about.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="rounded-full bg-[#071018] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1c9cf0]"
              >
                Learn more
              </Link>
              <Link
                to="/about/team"
                className="rounded-full border border-[#071018]/15 px-6 py-3 text-sm font-semibold text-[#071018] transition-colors hover:border-[#1c9cf0] hover:text-[#1c9cf0]"
              >
                Our team
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-[#071018]/5 sm:p-8">
              <h3 className="font-display text-xl font-bold text-[#071018]">
                Mission
              </h3>
              <p className="mt-3 leading-relaxed text-[#071018]/65">
                {site.about.mission}
              </p>
            </div>
            <div className="rounded-2xl bg-[#071018] p-6 text-white sm:p-8">
              <h3 className="font-display text-xl font-bold text-[#ff7f27]">
                Vision
              </h3>
              <p className="mt-3 leading-relaxed text-white/70">
                {site.about.vision}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {site.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white px-4 py-7 shadow-sm ring-1 ring-[#071018]/5 sm:px-5 sm:py-8"
            >
              <p className="font-display text-4xl font-extrabold text-[#1c9cf0] sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold tracking-wide text-[#071018]/50 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
