"use client";

import Image from "next/image";
import type { Review } from "@/lib/reviews";
import { CONTACT, GOOGLE_MAPS_URL } from "@/lib/constants";
import Button from "./ui/Button";
import Icon from "./ui/Icon";

type Props = {
  rating: number;
  totalRatings: number;
  reviews: Review[];
};

const GOOGLE_REVIEWS_URL = GOOGLE_MAPS_URL;

function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  const count = Math.round(rating);
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star-fill"
          size={size}
          className={i < count ? "text-yellow-400" : "text-white/25"}
        />
      ))}
    </div>
  );
}

function MarqueeReview({ review }: { review: Review }) {
  return (
    <article className="w-[17.5rem] sm:w-[19rem] shrink-0 rounded-xl bg-white/10 border border-white/10 px-4 py-3.5">
      <Stars rating={review.rating} />
      <p className="mt-2.5 text-sm text-primary-100 leading-relaxed line-clamp-4">
        {review.text}
      </p>
      <footer className="mt-3 flex items-center gap-2.5">
        {review.profilePhotoUrl ? (
          <Image
            src={review.profilePhotoUrl}
            alt=""
            width={28}
            height={28}
            className="w-7 h-7 rounded-full object-cover"
          />
        ) : (
          <span className="w-7 h-7 rounded-full bg-primary-700 text-white text-xs font-semibold flex items-center justify-center">
            {review.name.charAt(0).toUpperCase()}
          </span>
        )}
        <div className="min-w-0">
          <p className="text-xs font-semibold text-white truncate">{review.name}</p>
          <p className="text-[11px] text-primary-300 truncate">
            {review.relativeTime || review.date}
          </p>
        </div>
      </footer>
    </article>
  );
}

export default function TestimonialsCarousel({
  rating,
  totalRatings,
  reviews,
}: Props) {
  const track = [...reviews, ...reviews];

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-8 md:mb-10 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <Stars rating={5} size={18} />
          <span className="font-bold text-white text-lg">
            {rating.toFixed(1)} · {totalRatings} avis
          </span>
        </div>
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

      <div
        className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]"
        aria-label="Avis clients défilants"
      >
        <div className="flex gap-3 w-max motion-safe:animate-scroll-x group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:w-full motion-reduce:justify-center">
          {track.map((review, i) => (
            <MarqueeReview key={`${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>

      <p className="sr-only">
        {reviews.length} avis clients affichés en bande défilante, note moyenne{" "}
        {rating.toFixed(1)} sur 5.
      </p>

      <div className="mt-8 md:mt-10 flex justify-center">
        <Button
          as="a"
          href={CONTACT.phoneTel}
          variant="white"
          size="md"
          iconLeft={<Icon name="phone" size={18} />}
        >
          Rejoignez nos clients satisfaits
        </Button>
      </div>
    </>
  );
}
