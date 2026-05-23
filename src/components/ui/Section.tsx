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
  tight: "py-8 md:py-10 lg:py-12",
  default: "py-10 md:py-12 lg:py-16",
  loose: "py-12 md:py-16 lg:py-20",
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
