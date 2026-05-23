import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "outline" | "glass";
  hover?: boolean;
  padding?: "default" | "tight" | "loose" | "none";
};

const variants = {
  default: "bg-white border border-slate-200",
  elevated:
    "bg-white border border-slate-200 shadow-[0_10px_40px_-12px_rgb(30,64,175,0.18)]",
  outline: "border border-slate-300 bg-white/50",
  glass: "bg-white/10 backdrop-blur-md border border-white/15 text-white",
};

const paddings = {
  none: "",
  tight: "p-5",
  default: "p-6 md:p-8",
  loose: "p-8 md:p-10",
};

export default function Card({
  children,
  className = "",
  variant = "default",
  hover = false,
  padding = "default",
}: Props) {
  const hoverClasses = hover
    ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgb(30,64,175,0.15)] hover:border-primary-200"
    : "";
  return (
    <div className={`rounded-2xl ${variants[variant]} ${paddings[padding]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
