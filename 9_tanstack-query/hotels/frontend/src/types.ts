export interface Place {
  id: number;
  image_url: string;
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string[];
  rating: number;
  price_per_night: number;
  availability: boolean;
}

export interface PlaceData {
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string;
  rating: string;
  price_per_night: string;
  availability: boolean;
}

// Omit ile tipten isteidğimiz değerleri öıkarabiliriz
// export interface PlaceWithoutId extends Omit<Place, "id" | "image_url"> {}
