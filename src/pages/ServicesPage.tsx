import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/data/site";

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Electromechanical and rural energy solutions"
        description="Integrated off-grid solutions and rural technologies that raise productivity and support development in communities across Ethiopia."
        crumbs={[{ label: "Services" }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {site.servicePillars.map((pillar) => (
              <div
                key={pillar.id}
                className="rounded-2xl bg-[#f3f1ec] p-7 sm:p-8"
              >
                <span className="font-display text-4xl font-extrabold text-[#1c9cf0]">
                  {pillar.id}
                </span>
                <h2 className="mt-4 font-display text-2xl font-bold text-[#071018]">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#071018]/60">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <h2 className="mt-16 font-display text-3xl font-extrabold text-[#071018]">
            Major services
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {site.about.majorServices.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-[#071018]/8 px-4 py-3 text-sm text-[#071018]/75"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link
              to="/services/categories"
              className="rounded-full bg-[#071018] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1c9cf0]"
            >
              Browse product categories
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-[#071018] py-20 text-white sm:py-24">
        <Container>
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            How we work
          </h2>
          <p className="mt-3 max-w-xl text-white/55">
            A clear process from first conversation to handover.
          </p>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.process.map((step) => (
              <li key={step.step} className="border-t border-[#1c9cf0]/40 pt-5">
                <span className="font-display text-3xl font-extrabold text-[#ff7f27]">
                  {step.step}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-white/55">{step.description}</p>
              </li>
            ))}
          </ol>
          <Link
            to="/#contact"
            className="mt-12 inline-flex rounded-full bg-[#1c9cf0] px-6 py-3 text-sm font-semibold text-white hover:bg-[#ff7f27]"
          >
            Get in touch
          </Link>
        </Container>
      </section>

      <section className="bg-[#f3f1ec] py-20 sm:py-24">
        <Container>
          <h2 className="font-display text-3xl font-extrabold text-[#071018]">
            Full service list
          </h2>
          <ol className="mt-8 divide-y divide-[#071018]/10 rounded-2xl bg-white px-5 sm:px-7">
            {site.services.map((service, i) => (
              <li
                key={service.title}
                className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5"
              >
                <span className="text-sm font-bold text-[#ff7f27]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#071018]">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#071018]/55">
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </main>
  );
}
