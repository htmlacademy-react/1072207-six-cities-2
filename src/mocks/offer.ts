export type OfferCity={
  name: string;
  location: OfferLocation;
}

export type OfferLocation={
  latitude: number;
  longitude: number;
  zoom: number;
}

type OfferHost={
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Offer={
  id: string;
  title: string;
  type: string;
  price: number;
  city: OfferCity;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: OfferHost;
  images: string[];
  maxAdults: number;
}

export const offer: Offer = {
  id: '08b677a7-132b-47e6-a796-837a389087e8',
  title: 'Beautiful & luxurious studio at great location111',
  type: 'apartment',
  price: 120,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  isFavorite: false,
  isPremium: true,
  rating: 4,
  description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  bedrooms: 3,
  goods: [
    'Heating'
  ],
  host: {
    name: 'Oliver Conner',
    avatarUrl: 'img/apartment-01.jpg',
    isPro: false
  },
  images: [
    'img/apartment-01.jpg'
  ],
  maxAdults: 4
};
