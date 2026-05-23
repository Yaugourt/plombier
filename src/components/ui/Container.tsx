import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
};

const sizes = {
  narrow: "max-w-4xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export default function Container({ children, className = "", size = "default" }: Props) {
  return (
    <div className={`${sizes[size]} mx-auto px-5 md:px-6 lg:px-8 ${className}`}>{children}</div>
  );
}
