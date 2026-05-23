import { getReviews } from "@/lib/reviews";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import TestimonialsCarousel from "./TestimonialsCarousel";

export default async function TestimonialsSection() {
  const { rating, totalRatings, reviews } = await getReviews();

  return (
    <Section
      id="avis"
      spacing="default"
      className="bg-primary-950 text-white relative overflow-hidden"
    >
      {/* Decorative overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grain opacity-[0.04]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative z-10">
        <SectionHeader
          invert
          eyebrow="Avis clients"
          title={
            <>
              Ils nous ont fait <span className="text-accent">confiance</span>
            </>
          }
          description={
            <>
              Note moyenne {rating.toFixed(1)}/5 sur{" "}
              {totalRatings.toLocaleString("fr-FR")} avis Google.
            </>
          }
        />

        <TestimonialsCarousel
          rating={rating}
          totalRatings={totalRatings}
          reviews={reviews}
        />
      </div>
    </Section>
  );
}
