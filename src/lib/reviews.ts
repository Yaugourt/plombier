import { SOCIAL_PROOF } from "./constants";
import { MANUAL_REVIEWS } from "./manual-reviews";

export type Review = {
  id: number | string;
  name: string;
  rating: number;
  text: string;
  date: string;
  relativeTime: string;
  profilePhotoUrl: string | null;
};

export type ReviewsData = {
  rating: number;
  totalRatings: number;
  reviews: Review[];
};

export async function getReviews(): Promise<ReviewsData> {
  return {
    rating: SOCIAL_PROOF.rating,
    totalRatings: SOCIAL_PROOF.totalReviews,
    reviews: MANUAL_REVIEWS,
  };
}
