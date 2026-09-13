import { cn } from "@/lib/utils";
import { site } from "@/data/site";
import bluelogo from "@/assets/bluelogo-transparent.png";

type BrandLogoProps = {
  className?: string;
  imgClassName?: string;
  /** Light plate behind logo for dark surfaces */
  onDark?: boolean;
};

export function BrandLogo({
  className,
  imgClassName,
  onDark = false,
}: BrandLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center",
        onDark && "rounded-sm bg-white px-2.5 py-1.5 shadow-sm",
        className
      )}
    >
      <img
        src={bluelogo}
        alt={site.brand}
        className={cn("h-10 w-auto object-contain sm:h-11", imgClassName)}
      />
    </span>
  );
}
