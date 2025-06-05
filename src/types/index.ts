export interface Activity {
  id: string;
  name: string;
  description: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
}

export interface ItineraryDay {
  id: string;
  title: string;
  activities: Activity[];
}

export interface Itinerary {
  id: string;
  days: ItineraryDay[];
}
