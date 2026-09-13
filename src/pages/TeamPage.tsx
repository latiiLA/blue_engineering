import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { TeamAvatar } from "@/components/TeamAvatar";
import { site } from "@/data/site";
import { Mail, Phone } from "lucide-react";

export default function TeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our team"
        title="Meet our experienced management team"
        description="Dedicated professionals delivering electromechanical projects across Ethiopia."
        crumbs={[
          { label: "About Us", to: "/about" },
          { label: "Our Team" },
        ]}
      />

      <section className="bg-[#f3f1ec] py-20 sm:py-24">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {site.team.map((member) => (
              <li
                key={member.name}
                className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-[#071018]/5 sm:p-7"
              >
                <TeamAvatar name={member.name} image={member.image} />
                <h2 className="mt-4 font-display text-xl font-bold text-[#071018]">
                  {member.name}
                </h2>
                <p className="mt-1 text-sm font-semibold text-[#ff7f27]">
                  {member.role}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#071018]/60">
                  {member.bio}
                </p>
                {(member.phone || member.email) && (
                  <div className="mt-5 space-y-2 border-t border-[#071018]/8 pt-4 text-sm text-[#071018]/65">
                    {member.phone && (
                      <a
                        href={`tel:${member.phone.replace(/\s|-/g, "")}`}
                        className="flex items-center gap-2 hover:text-[#1c9cf0]"
                      >
                        <Phone className="size-3.5 shrink-0" />
                        {member.phone}
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 hover:text-[#1c9cf0]"
                      >
                        <Mail className="size-3.5 shrink-0" />
                        {member.email}
                      </a>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}
