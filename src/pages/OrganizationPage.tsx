import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { OrgChart } from "@/components/OrgChart";
import { site } from "@/data/site";

export default function OrganizationPage() {
  return (
    <main>
      <PageHero
        eyebrow="Organization"
        title="How we are structured"
        description={site.organization.summary}
        crumbs={[
          { label: "About Us", to: "/about" },
          { label: "Organization" },
        ]}
      />

      <section className="bg-[#f3f1ec] py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold text-[#071018]">
              Organizational structure
            </h2>
            <p className="mt-4 leading-relaxed text-[#071018]/70">
              {site.organization.structure}
            </p>
          </div>

          <div className="mt-12 rounded-2xl bg-[#e8e4dc]/80 px-4 py-10 sm:px-8">
            <OrgChart />
          </div>

          <div className="mt-12">
            <Link
              to="/about/team"
              className="rounded-full bg-[#071018] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1c9cf0]"
            >
              View our team
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
