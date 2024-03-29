import {OfferCity} from 'mocks/offer.ts';
import {OfferLocation} from 'mocks/offer.ts';

export type OfferFromList={
  id: string;
  title: string;
  type: string;
  price: number;
  city: OfferCity;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export const offers: OfferFromList[] = [
  {
    'id': '08b677a7-132b-47e6-a796-837a389087e8',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 264,
    'previewImage': 'https://13.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.6
  },
  {
    'id': '290a6e53-27db-42ba-b8e9-fa89b044819c',
    'title': 'Canal View Prinsengracht',
    'type': 'house',
    'price': 268,
    'previewImage': 'https://13.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.7
  },
  {
    'id': 'fc49a73f-2c52-4e0d-b22d-fc974971a66c',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 317,
    'previewImage': 'https://13.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.9
  },
  {
    'id': 'f2eccd30-b923-42ed-b6e6-ed19b01c4002',
    'title': 'Waterfront with extraordinary view',
    'type': 'room',
    'price': 189,
    'previewImage': 'https://13.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.3
  },
];
