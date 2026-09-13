import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs?: { label: string; to?: string }[];
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-white/10 bg-[#071018] pt-10 pb-14 text-white sm:pt-12 sm:pb-16",
        className
      )}
    >
      <Container>
        {crumbs && crumbs.length > 0 && (
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/45">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            {crumbs.map((crumb) => (
              <span key={crumb.label} className="inline-flex items-center gap-2">
                <span>/</span>
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <p className="text-sm font-semibold tracking-[0.22em] text-[#1c9cf0] uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
