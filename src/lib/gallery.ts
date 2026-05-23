import { readdirSync } from "node:fs";
import { join } from "node:path";

export type Photo = {
  src: string;
  alt: string;
};

export function getTravauxPhotos(): Photo[] {
  try {
    const dir = join(process.cwd(), "public", "Travaux");
    const files = readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
      .sort();
    return files.map((file) => ({
      src: `/Travaux/${file}`,
      alt: "Réalisation Cassard Sanitaire et Chauffage — chantier plomberie",
    }));
  } catch {
    return [];
  }
}
