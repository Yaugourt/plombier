import { NextResponse } from 'next/server';

// Place ID Google de Cassard Sanitaire et Chauffage
// À remplacer par le vrai Place ID (trouvable sur Google My Business)
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID || '';
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || '';

export async function GET() {
  // Si pas de clé API, retourner les avis manuels
  if (!GOOGLE_API_KEY || !GOOGLE_PLACE_ID) {
    return NextResponse.json({
      rating: 5.0,
      totalRatings: 5014,
      reviews: [], // Avis manuels dans le composant
      error: 'Google API not configured',
    });
  }

  try {
    // Récupérer les détails du lieu
    const detailsResponse = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=rating,user_ratings_total,reviews&key=${GOOGLE_API_KEY}&language=fr`
    );

    const detailsData = await detailsResponse.json();

    if (detailsData.status === 'OK' && detailsData.result) {
      const reviews = (detailsData.result.reviews || []).map((review: any) => ({
        id: review.time || Date.now(),
        name: review.author_name,
        rating: review.rating,
        text: review.text,
        date: new Date(review.time * 1000).toLocaleDateString('fr-FR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        relativeTime: review.relative_time_description || '',
        profilePhotoUrl: review.profile_photo_url || null,
      }));

      return NextResponse.json({
        rating: detailsData.result.rating || 5.0,
        totalRatings: detailsData.result.user_ratings_total || 5014,
        reviews: reviews.slice(0, 10), // Limiter à 10 avis
      });
    }

    // Fallback si erreur API
    return NextResponse.json({
      rating: 5.0,
      totalRatings: 5014,
      reviews: [],
      error: 'API error',
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json({
      rating: 5.0,
      totalRatings: 5014,
      reviews: [],
      error: 'Failed to fetch reviews',
    });
  }
}

