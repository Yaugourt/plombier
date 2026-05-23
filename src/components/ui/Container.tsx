import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
};

const sizes = {
  narrow: "max-w-4xl",
  default: "max-w-7xl",
  wide: "max-w-[1400px]",
};

export default function Container({ children, className = "", size = "default" }: Props) {
  return (
    <div className={`${sizes[size]} mx-auto px-6 md:px-8 lg:px-12 ${className}`}>{children}</div>
  );
}
