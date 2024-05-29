import {Offer} from 'types/offer.ts';

export const offerMocks: Offer = {
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
    'Heating',
    'Wi-Fi',
    'Washing machine',
    'Towels',
    'Heating',
    'Coffee machine',
    'Baby seat',
    'Kitchen',
    'Dishwasher',
    'Cabel TV',
    'Fridge',
  ],
  host: {
    name: 'Oliver Conner',
    avatarUrl: 'img/apartment-01.jpg',
    isPro: true
  },
  images: [
    'img/apartment-02.jpg',
    'img/apartment-01.jpg',
    'img/apartment-03.jpg',
    'img/studio-01.jpg',
    'img/studio-photos.jpg',
    'img/room.jpg',
    'img/room.jpg',
    'img/room.jpg',
    'img/studio-photos.jpg',
    'img/apartment-04.jpg',
  ],
  maxAdults: 4
};
