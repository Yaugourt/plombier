import { ReactNode } from "react";
import { CONTACT } from "@/lib/constants";

type Props = {
  children?: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export default function PhoneLink({ children, className = "", ariaLabel }: Props) {
  return (
    <a
      href={CONTACT.phoneTel}
      aria-label={ariaLabel ?? `Appeler ${CONTACT.phone}`}
      className={className}
    >
      {children ?? CONTACT.phone}
    </a>
  );
}
