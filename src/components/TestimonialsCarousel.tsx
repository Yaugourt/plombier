"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Review } from "@/lib/reviews";
import { CONTACT, GOOGLE_MAPS_URL } from "@/lib/constants";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Icon from "./ui/Icon";

type Props = {
  rating: number;
  totalRatings: number;
  reviews: Review[];
};

const GOOGLE_REVIEWS_URL = GOOGLE_MAPS_URL;

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  const count = Math.round(rating);
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star-fill"
          size={size}
          className={i < count ? "text-yellow-400" : "text-white/20"}
        />
      ))}
    </div>
  );
}

function Avatar({ review }: { review: Review }) {
  if (review.profilePhotoUrl) {
    return (
      <Image
        src={review.profilePhotoUrl}
        alt={review.name}
        width={40}
        height={40}
        className="w-10 h-10 rounded-full object-cover"
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      className="w-10 h-10 rounded-full bg-primary-700 text-white flex items-center justify-center font-semibold"
    >
      {review.name.charAt(0).toUpperCase()}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <Card variant="glass" className="reveal h-full flex flex-col relative">
      <Icon
        name="quote"
        size={40}
        className="text-accent/40 absolute top-5 left-5"
      />
      <div className="relative pt-10">
        <Stars rating={review.rating} size={16} />
        <p className="text-primary-100 leading-relaxed mt-4">{review.text}</p>
      </div>
      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
        <Avatar review={review} />
        <div className="min-w-0">
          <div className="font-semibold text-white truncate">{review.name}</div>
          <div className="text-xs text-primary-300">
            {review.relativeTime || review.date}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function TestimonialsCarousel({
  rating,
  totalRatings,
  reviews,
}: Props) {
  const visible = reviews.slice(0, 9);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const cardWidth = el.firstElementChild
          ? (el.firstElementChild as HTMLElement).getBoundingClientRect().width + 16
          : 1;
        const idx = Math.round(el.scrollLeft / cardWidth);
        setActiveDot(Math.min(visible.length - 1, Math.max(0, idx)));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
    };
  }, [visible.length]);

  return (
    <>
      {/* Rating strip */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
        <div className="flex items-center gap-2">
          <Stars rating={5} size={20} />
          <span className="font-semibold text-white">
            {rating.toFixed(1)} sur 5
          </span>
        </div>
        <span className="hidden sm:block h-5 w-px bg-white/20" />
        <span className="text-sm text-primary-200">
          {totalRatings} avis vérifiés sur Google
        </span>
        <span className="hidden sm:block h-5 w-px bg-white/20" />
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-primary-200 hover:text-white transition-colors text-sm font-medium"
        >
          Voir sur Google
          <Icon name="external" size={14} />
        </a>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden">
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-6 px-6 pb-4"
        >
          {visible.map((r) => (
            <div
              key={r.id}
              className="snap-start shrink-0 w-[85%] sm:w-[70%]"
            >
              <ReviewCard review={r} />
            </div>
          ))}
        </div>
        <div
          className="flex items-center justify-center gap-2 mt-4"
          role="tablist"
          aria-label="Pagination des avis"
        >
          {visible.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === activeDot}
              aria-label={`Avis ${i + 1}`}
              onClick={() => {
                const el = scrollerRef.current;
                if (!el) return;
                const child = el.children[i] as HTMLElement | undefined;
                if (child) {
                  el.scrollTo({ left: child.offsetLeft - 24, behavior: "smooth" });
                }
              }}
              className={`h-2 rounded-full transition-all ${
                i === activeDot ? "w-6 bg-accent" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 flex justify-center">
        <Button
          as="a"
          href={CONTACT.phoneTel}
          variant="white"
          size="lg"
          iconLeft={<Icon name="phone" size={18} />}
        >
          Rejoignez nos clients satisfaits
        </Button>
      </div>
    </>
  );
}
