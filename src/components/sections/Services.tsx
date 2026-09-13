import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { site } from "@/data/site";

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-white py-24 sm:py-32"
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.22em] text-[#1c9cf0] uppercase">
              What we do
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[#071018] sm:text-5xl">
              Services from line to load
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#071018]/65 sm:text-lg">
              End-to-end electromechanical and rural energy solutions built for
              reliability in the field.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/services"
              className="rounded-full bg-[#071018] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1c9cf0]"
            >
              All services
            </Link>
            <Link
              to="/services/categories"
              className="rounded-full border border-[#071018]/15 px-6 py-3 text-sm font-semibold text-[#071018] hover:border-[#1c9cf0] hover:text-[#1c9cf0]"
            >
              Categories
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {site.servicePillars.map((pillar) => (
            <div
              key={pillar.id}
              className="rounded-2xl bg-[#f3f1ec] p-7 transition-colors hover:bg-[#071018] hover:text-white sm:p-8"
            >
              <span className="font-display text-4xl font-extrabold text-[#1c9cf0]">
                {pillar.id}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed opacity-65">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
