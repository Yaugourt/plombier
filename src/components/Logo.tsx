import Image from "next/image";
import { COMPANY } from "@/lib/constants";

type Props = {
  variant?: "icon" | "full";
  inverted?: boolean;
  className?: string;
  priority?: boolean;
};

export default function Logo({
  variant = "full",
  inverted = false,
  className = "",
  priority = false,
}: Props) {
  if (variant === "icon") {
    return (
      <Image
        src="/logo-icon.svg"
        alt={COMPANY.name}
        width={32}
        height={32}
        className={className}
        priority={priority}
      />
    );
  }

  const src = inverted ? "/logo-full-light.svg" : "/logo-full.svg";

  return (
    <Image
      src={src}
      alt={COMPANY.name}
      width={240}
      height={48}
      className={`h-8 w-auto ${className}`}
      priority={priority}
    />
  );
}
