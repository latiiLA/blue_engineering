import { Container } from "@/components/layout/Container";
import { site } from "@/data/site";

export function Projects() {
  const featured = site.projects.find((p) => p.featured) ?? site.projects[0];
  const rest = site.projects.filter((p) => p.title !== featured.title);

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-[#071018] py-24 text-white sm:py-32"
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-[#1c9cf0] uppercase">
              Selected work
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Projects in the field
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/50 sm:text-right">
            Sample project types from our electromechanical and energy work
            across Ethiopia.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-12 lg:gap-5">
          <a
            href="#contact"
            className="group relative block min-h-[22rem] overflow-hidden rounded-2xl lg:col-span-7 lg:min-h-[34rem]"
          >
            <img
              src={featured.image}
              alt=""
              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-[#071018]/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#ff7f27] uppercase">
                {featured.category}
              </p>
              <h3 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-2 text-sm text-white/65">{featured.location}</p>
            </div>
          </a>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:flex lg:flex-col lg:gap-5">
            {rest.map((project) => (
              <a
                key={project.title}
                href="#contact"
                className="group relative block min-h-[14rem] overflow-hidden rounded-2xl lg:min-h-0 lg:flex-1"
              >
                <img
                  src={project.image}
                  alt=""
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071018]/95 via-[#071018]/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-[#ff7f27] uppercase">
                    {project.category}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/60">{project.location}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
