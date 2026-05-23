import { ReactNode } from "react";
import Container from "./Container";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  containerSize?: "default" | "narrow" | "wide";
  spacing?: "default" | "tight" | "loose";
  as?: "section" | "div" | "article";
};

const spacings = {
  tight: "py-10 md:py-12 lg:py-14",
  default: "py-14 md:py-16 lg:py-20",
  loose: "py-16 md:py-20 lg:py-28",
};

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  containerSize = "default",
  spacing = "default",
  as: As = "section",
}: Props) {
  return (
    <As id={id} className={`${spacings[spacing]} ${className}`}>
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </As>
  );
}
