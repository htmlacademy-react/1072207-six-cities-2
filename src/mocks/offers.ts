type OfferCity = {
  name: string;
  location: OfferLocation;
}

type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

// Как лучше указывать? todo
// type OfferGoods = string[];

type OfferHost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type OfferT = {
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
  // goods: OfferGoods; todo
  goods: string[];
  host: OfferHost;
  images: string[];
  maxAdults: number;
}


export const offers: OfferT[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
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
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 130,
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
    rating: 5,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Gustavo Fling',
      avatarUrl: 'img/apartment-01.jpg',
      isPro: false
    },
    images: [
      'img/apartment-01.jpg'
    ],
    maxAdults: 4
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f03',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 150,
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
    isPremium: false,
    rating: 3,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Walter Wait',
      avatarUrl: 'img/apartment-01.jpg',
      isPro: false
    },
    images: [
      'img/apartment-01.jpg'
    ],
    maxAdults: 4
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f04',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 160,
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
    isPremium: false,
    rating: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Max Pain',
      avatarUrl: 'img/apartment-01.jpg',
      isPro: false
    },
    images: [
      'img/apartment-01.jpg'
    ],
    maxAdults: 4
  }
];
