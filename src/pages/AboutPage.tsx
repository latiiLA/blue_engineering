import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/data/site";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About us"
        title="About Blue Engineering & Trade"
        description={site.about.story}
        crumbs={[{ label: "About Us" }]}
      />

      <section className="bg-[#f3f1ec] py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-[#071018]">
              Who we are
            </h2>
            <p className="mt-4 leading-relaxed text-[#071018]/70">
              {site.about.whoWeAre}
            </p>
            <p className="mt-4 leading-relaxed text-[#071018]/70">
              {site.about.summary}
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-[#071018]/5 sm:p-8">
              <h3 className="font-display text-xl font-bold text-[#071018]">
                Mission
              </h3>
              <p className="mt-3 text-[#071018]/65 leading-relaxed">
                {site.about.mission}
              </p>
            </div>
            <div className="rounded-2xl bg-[#071018] p-6 text-white sm:p-8">
              <h3 className="font-display text-xl font-bold text-[#ff7f27]">
                Vision
              </h3>
              <p className="mt-3 text-white/70 leading-relaxed">
                {site.about.vision}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <h2 className="font-display text-3xl font-extrabold text-[#071018]">
            {site.about.ruralDivision.title}
          </h2>
          <p className="mt-2 text-sm font-semibold text-[#1c9cf0]">
            Established {site.about.ruralDivision.year}
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#071018]/70">
            {site.about.ruralDivision.summary}
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {site.about.ruralDivision.points.map((point) => (
              <li
                key={point}
                className="rounded-xl border border-[#071018]/8 bg-[#f3f1ec]/60 px-5 py-4 text-sm text-[#071018]/75"
              >
                {point}
              </li>
            ))}
          </ul>

          <h3 className="mt-14 font-display text-2xl font-bold text-[#071018]">
            Rural principles
          </h3>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {site.about.ruralPrinciples.map((item) => (
              <li key={item.title} className="border-t-2 border-[#1c9cf0]/40 pt-4">
                <p className="font-display text-lg font-bold text-[#071018]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-[#071018]/55">{item.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-[#f3f1ec] py-20 sm:py-24">
        <Container>
          <h2 className="font-display text-3xl font-extrabold text-[#071018]">
            Values we work by
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {site.about.values.map((value, i) => (
              <li key={value.title}>
                <span className="text-xs font-bold text-[#ff7f27]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-display text-lg font-bold text-[#071018]">
                  {value.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#071018]/55">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-16 flex flex-wrap gap-4">
            <Link
              to="/about/organization"
              className="rounded-full bg-[#071018] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1c9cf0]"
            >
              Organization structure
            </Link>
            <Link
              to="/about/team"
              className="rounded-full border border-[#071018]/15 px-6 py-3 text-sm font-semibold text-[#071018] hover:border-[#1c9cf0] hover:text-[#1c9cf0]"
            >
              Meet the team
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
