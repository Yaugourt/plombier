"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import type { Photo } from "@/lib/gallery";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";
import Icon from "./ui/Icon";

const INITIAL_COUNT = 12;

type Props = {
  photos: Photo[];
};

export default function GalleryClient({ photos }: Props) {
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const visiblePhotos = showAll ? photos : photos.slice(0, INITIAL_COUNT);
  const hasMore = photos.length > INITIAL_COUNT;

  const openLightbox = useCallback((i: number) => {
    setOpenIndex(i);
    dialogRef.current?.showModal();
  }, []);

  const closeLightbox = useCallback(() => {
    dialogRef.current?.close();
    setOpenIndex(null);
  }, []);

  const goPrev = useCallback(() => {
    setOpenIndex((idx) => (idx === null ? 0 : (idx - 1 + photos.length) % photos.length));
  }, [photos.length]);

  const goNext = useCallback(() => {
    setOpenIndex((idx) => (idx === null ? 0 : (idx + 1) % photos.length));
  }, [photos.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openIndex, goPrev, goNext]);

  // Sync close on Esc / native close
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => setOpenIndex(null);
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  // Click on backdrop closes
  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      closeLightbox();
    }
  };

  const current = openIndex !== null ? photos[openIndex] : null;

  return (
    <Section id="realisations" spacing="default" className="bg-white">
      <SectionHeader
        eyebrow="Nos réalisations"
        title={
          <>
            Des chantiers <span className="gradient-text">réalisés près de chez vous</span>
          </>
        }
        description="Plus de 5000 interventions, des fuites réparées aux salles de bain rénovées."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {visiblePhotos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => openLightbox(i)}
            aria-label={`Agrandir la photo ${i + 1} sur ${photos.length}`}
            className={`relative aspect-square overflow-hidden rounded-2xl group shadow-soft hover:shadow-soft-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2${i === 0 ? " lg:col-span-2 lg:row-span-2" : ""}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-900/0 via-primary-900/0 to-primary-900/0 group-hover:from-primary-900/40 group-hover:via-primary-900/20 group-hover:to-primary-900/50 transition-all duration-300"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/95 text-primary-700 shadow-lg">
                <Icon name="external" size={20} />
              </span>
            </span>
          </button>
        ))}
      </div>

      {hasMore && !showAll && (
        <div className="mt-10 flex justify-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setShowAll(true)}
            iconRight={<Icon name="chevron-down" size={18} />}
          >
            Voir toutes les photos ({photos.length})
          </Button>
        </div>
      )}

      <dialog
        ref={dialogRef}
        onClick={handleDialogClick}
        aria-labelledby="gallery-dialog-title"
        className="m-0 p-0 w-screen h-screen max-w-none max-h-none bg-transparent backdrop:bg-slate-950/85 backdrop:backdrop-blur-md"
      >
        <h2 id="gallery-dialog-title" className="sr-only">
          Galerie de réalisations
        </h2>
        {current && (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Fermer la galerie"
              className="absolute top-4 right-4 md:top-6 md:right-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Icon name="close" size={24} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Photo précédente"
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Icon name="chevron-right" size={24} className="rotate-180" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Photo suivante"
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Icon name="chevron-right" size={24} />
            </button>

            <div
              className="relative w-full max-w-5xl h-[75vh] md:h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 text-white/90 text-sm font-medium tabular-nums">
              {(openIndex ?? 0) + 1} / {photos.length}
            </div>
          </div>
        )}
      </dialog>
    </Section>
  );
}
