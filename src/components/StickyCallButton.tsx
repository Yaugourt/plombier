"use client";

import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/constants";
import Icon from "./ui/Icon";

export default function StickyCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 safe-pb transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-8px_30px_rgb(0,0,0,0.08)] px-4 py-3">
        <a
          href={CONTACT.phoneTel}
          aria-label={`Appeler maintenant le ${CONTACT.phone}`}
          className="flex items-center justify-center gap-3 w-full h-14 rounded-full bg-accent-warm hover:bg-accent-warm-dark active:bg-accent-warm-darker text-white font-semibold text-base shadow-warm transition-colors"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/70" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
          <Icon name="phone" size={20} />
          <span>Appeler — Urgence 24/7</span>
        </a>
      </div>
    </div>
  );
}
