import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "white" | "urgence" | "outline";
type Size = "sm" | "md" | "lg" | "xl";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type LinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    as: "a" | "link";
    href: string;
    external?: boolean;
  };

type Props = ButtonProps | LinkProps;

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm gap-1.5",
  md: "h-12 px-6 text-base gap-2",
  lg: "h-14 px-8 text-base gap-2.5",
  xl: "h-16 px-10 text-lg gap-3",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30",
  secondary:
    "bg-primary-50 text-primary-700 hover:bg-primary-100 active:bg-primary-200 border border-primary-100",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200",
  white:
    "bg-white text-primary-700 hover:bg-primary-50 active:bg-primary-100 shadow-xl shadow-black/15",
  urgence:
    "bg-accent-warm text-white hover:bg-accent-warm-dark active:bg-accent-warm-darker shadow-lg shadow-accent-warm/30 hover:shadow-xl hover:shadow-accent-warm/40",
  outline:
    "bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 active:bg-white/30",
};

const base =
  "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed select-none whitespace-nowrap motion-safe:hover:scale-[1.02] active:scale-[0.98]";

export default function Button(props: Props) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    fullWidth = false,
    iconLeft,
    iconRight,
    ...rawRest
  } = props as Props & { [k: string]: unknown };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  const content = (
    <>
      {iconLeft && <span className="flex-shrink-0 inline-flex">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="flex-shrink-0 inline-flex">{iconRight}</span>}
    </>
  );

  if ("as" in props && (props.as === "a" || props.as === "link")) {
    const { href, external, as: _omitAs, ...rest } = rawRest as Partial<LinkProps> & {
      href: string;
      external?: boolean;
      as?: unknown;
    };
    void _omitAs;
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    if (
      external ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:") ||
      href.startsWith("http")
    ) {
      return (
        <a href={href} className={cls} {...anchorProps}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...anchorProps}>
        {content}
      </Link>
    );
  }

  const { as: _omitAs2, ...rest } = rawRest as { as?: unknown } & ButtonHTMLAttributes<HTMLButtonElement>;
  void _omitAs2;
  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={cls} {...buttonProps}>
      {content}
    </button>
  );
}
