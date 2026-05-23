import Icon from "./ui/Icon";
import { SOCIAL_PROOF } from "@/lib/constants";

type Props = {
  rating?: number;
  totalRatings?: number;
  variant?: "light" | "dark";
  className?: string;
};

export default function GoogleRatingBadge({
  rating = SOCIAL_PROOF.rating,
  totalRatings = SOCIAL_PROOF.totalReviews,
  variant = "dark",
  className = "",
}: Props) {
  const valueColor = variant === "dark" ? "text-white" : "text-primary-900";
  const subColor = variant === "dark" ? "text-primary-200/80" : "text-slate-600";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center -space-x-0.5" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <Icon
            key={i}
            name="star-fill"
            size={18}
            className="text-yellow-400"
          />
        ))}
      </div>
      <span className={`font-semibold ${valueColor}`}>{rating.toFixed(1)}</span>
      <span className={`text-sm ${subColor}`}>
        ({totalRatings.toLocaleString("fr-FR")} avis Google)
      </span>
    </div>
  );
}
