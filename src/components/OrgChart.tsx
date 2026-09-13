import { site } from "@/data/site";

function Node({
  title,
  subtitle,
  accent = false,
}: {
  title: string;
  subtitle?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={
        accent
          ? "min-w-[11rem] rounded-xl bg-[#1c9cf0] px-4 py-3 text-center text-white shadow-sm"
          : "min-w-[10rem] rounded-xl bg-white px-4 py-3 text-center text-[#071018] ring-1 ring-[#071018]/10 shadow-sm"
      }
    >
      <p className="font-display text-sm font-bold leading-snug">{title}</p>
      {subtitle && (
        <p
          className={
            accent
              ? "mt-1 text-[11px] text-white/80"
              : "mt-1 text-[11px] text-[#071018]/55"
          }
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Connector() {
  return <div className="mx-auto h-8 w-px bg-[#071018]/20" aria-hidden />;
}

export function OrgChart() {
  const gm = site.team.find((m) => m.role === "General Manager");
  const foreman = site.team.find((m) => m.role === "Construction Foreman");
  const siteManager = site.team.find((m) => m.role === "Site Manager");
  const surveyor = site.team.find((m) => m.role === "Surveyor");

  return (
    <div className="overflow-x-auto pb-2">
      <div className="mx-auto flex min-w-[44rem] flex-col items-center">
        <Node
          title={gm?.name ?? "General Manager"}
          subtitle="General Manager"
          accent
        />
        <Connector />
        <Node
          title="Operational Manager"
          subtitle="Project Team Leader"
        />
        <Connector />

        <div className="relative w-full max-w-4xl">
          <div
            className="absolute top-0 right-[10%] left-[10%] h-px bg-[#071018]/20"
            aria-hidden
          />
          <div className="grid grid-cols-5 gap-3 pt-8">
            {[
              {
                title: "Engineering & Design",
                subtitle: "Design specialists",
              },
              {
                title: "Field Construction",
                subtitle: foreman?.name,
              },
              {
                title: "Site Management",
                subtitle: siteManager?.name,
              },
              {
                title: "Survey & Support",
                subtitle: surveyor?.name,
              },
              {
                title: "Panel Experts",
                subtitle: "Contract specialists",
              },
            ].map((dept) => (
              <div key={dept.title} className="flex flex-col items-center">
                <div className="mb-8 h-8 w-px bg-[#071018]/20" aria-hidden />
                <Node title={dept.title} subtitle={dept.subtitle} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
