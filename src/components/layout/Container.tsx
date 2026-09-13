import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
};

export function Container({
  children,
  className,
  as: Comp = "div",
}: ContainerProps) {
  return (
    <Comp
      className={cn(
        "mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12",
        className
      )}
    >
      {children}
    </Comp>
  );
}
