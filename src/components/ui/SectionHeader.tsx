import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  invert = false,
  className = "",
}: Props) {
  const isCenter = align === "center";
  return (
    <header
      className={`${isCenter ? "text-center mx-auto" : "text-left"} max-w-3xl ${
        isCenter ? "" : "mr-auto"
      } mb-12 md:mb-16 ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${
            invert
              ? "bg-white/10 text-accent border border-white/15"
              : "bg-primary-50 text-primary-700 border border-primary-100"
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-display font-bold tracking-tight text-balance leading-[1.1] text-[clamp(1.75rem,0.8rem+3vw,2.75rem)] ${
          invert ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-pretty text-[clamp(1rem,0.95rem+0.25vw,1.125rem)] leading-relaxed ${
            invert ? "text-primary-100" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </header>
  );
}
