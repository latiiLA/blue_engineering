import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const filters = [
  "All",
  ...Array.from(new Set(site.serviceCategories.map((c) => c.filter))),
];

export default function ServiceCategoriesPage() {
  const [active, setActive] = useState("All");

  const items = useMemo(() => {
    if (active === "All") return site.serviceCategories;
    return site.serviceCategories.filter((c) => c.filter === active);
  }, [active]);

  return (
    <main>
      <PageHero
        eyebrow="Categories"
        title="Service categories"
        description="BLUE Engineering designs, supplies, installs, and constructs electromechanical solutions, including productive-use equipment for rural communities."
        crumbs={[
          { label: "Services", to: "/services" },
          { label: "Categories" },
        ]}
      />

      <section className="bg-[#f3f1ec] py-20 sm:py-24">
        <Container>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-semibold transition-colors",
                  active === filter
                    ? "bg-[#071018] text-white"
                    : "bg-white text-[#071018]/70 ring-1 ring-[#071018]/10 hover:text-[#1c9cf0]"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="group overflow-hidden rounded-2xl bg-white ring-1 ring-[#071018]/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-[#ff7f27] uppercase">
                    {item.filter}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-bold text-[#071018]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#071018]/60">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/#contact"
              className="rounded-full bg-[#1c9cf0] px-6 py-3 text-sm font-semibold text-white hover:bg-[#ff7f27]"
            >
              Request a quote
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-[#071018]/15 px-6 py-3 text-sm font-semibold text-[#071018] hover:border-[#1c9cf0] hover:text-[#1c9cf0]"
            >
              Back to services overview
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
