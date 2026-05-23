import { getTravauxPhotos } from "@/lib/gallery";
import GalleryClient from "./GalleryClient";

export default function GallerySection() {
  const photos = getTravauxPhotos();
  return <GalleryClient photos={photos} />;
}
