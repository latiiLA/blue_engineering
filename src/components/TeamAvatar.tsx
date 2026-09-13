import { User } from "lucide-react";
import { cn } from "@/lib/utils";

type TeamAvatarProps = {
  name: string;
  image?: string;
  className?: string;
};

export function TeamAvatar({ name, image, className }: TeamAvatarProps) {
  if (image) {
    return (
      <div
        className={cn(
          "size-20 shrink-0 overflow-hidden rounded-full bg-[#dfe8ef] sm:size-24",
          className
        )}
      >
        <img src={image} alt={name} className="size-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex size-20 shrink-0 items-center justify-center rounded-full bg-[#d7e6f2] sm:size-24",
        className
      )}
      aria-label={`${name} photo placeholder`}
    >
      <User className="size-9 text-[#071018]/30 sm:size-10" strokeWidth={1.25} aria-hidden />
    </div>
  );
}
