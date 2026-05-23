"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import type { Photo } from "@/lib/gallery";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Icon from "./ui/Icon";

const STRIP_MAX = 8;

type Props = {
  photos: Photo[];
};

function StripPhoto({
  photo,
  index,
  onOpen,
}: {
  photo: Photo;
  index: number;
  onOpen: (index: number) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      aria-label={`Agrandir la photo ${index + 1}`}
      className="relative w-36 h-[6.5rem] sm:w-44 sm:h-[7.5rem] shrink-0 overflow-hidden rounded-xl group shadow-soft hover:shadow-soft-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="176px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/25 transition-colors"
      />
    </button>
  );
}

export default function GalleryClient({ photos }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const stripPhotos = useMemo(
    () => photos.slice(0, Math.min(STRIP_MAX, photos.length)),
    [photos],
  );

  const track = useMemo(
    () => [...stripPhotos, ...stripPhotos],
    [stripPhotos],
  );

  const openLightbox = useCallback((i: number) => {
    setOpenIndex(i);
    dialogRef.current?.showModal();
  }, []);

  const closeLightbox = useCallback(() => {
    dialogRef.current?.close();
    setOpenIndex(null);
  }, []);

  const goPrev = useCallback(() => {
    setOpenIndex((idx) =>
      idx === null ? 0 : (idx - 1 + photos.length) % photos.length,
    );
  }, [photos.length]);

  const goNext = useCallback(() => {
    setOpenIndex((idx) =>
      idx === null ? 0 : (idx + 1) % photos.length,
    );
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

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => setOpenIndex(null);
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      closeLightbox();
    }
  };

  const current = openIndex !== null ? photos[openIndex] : null;

  return (
    <Section id="realisations" spacing="tight" className="bg-white">
      <SectionHeader
        eyebrow="Nos réalisations"
        title={
          <>
            Sur le terrain, <span className="gradient-text">chez vous</span>
          </>
        }
        className="mb-6 md:mb-8"
      />

      {photos.length === 0 ? (
        <p className="text-center text-sm text-slate-600">
          Photos de chantiers bientôt disponibles.
        </p>
      ) : (
        <>
          <div
            className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_4%,black_96%,transparent)]"
            aria-label="Photos de réalisations défilantes"
          >
            <div className="flex gap-2 sm:gap-3 w-max motion-safe:animate-scroll-x motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:w-full motion-reduce:justify-center">
              {track.map((photo, i) => (
                <StripPhoto
                  key={`${photo.src}-${i}`}
                  photo={photo}
                  index={i % stripPhotos.length}
                  onOpen={openLightbox}
                />
              ))}
            </div>
          </div>

          <p className="sr-only">
            {stripPhotos.length} photos de chantiers en bande défilante. Cliquez
            pour agrandir et parcourir toute la galerie.
          </p>
        </>
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
