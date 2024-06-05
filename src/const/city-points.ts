export const CITIES__COORDINATES = {
  Paris: {
    'latitude': 48.50,
    'longitude': 2.20,
    'zoom': 9,
  },
  Cologne: {
    'latitude': 50.55,
    'longitude': 6.57,
    'zoom': 9,
  },
  Brussels: {
    'latitude': 50.85,
    'longitude': 4.43,
    'zoom': 9,
  },
  Amsterdam: {
    'latitude': 52.22,
    'longitude': 4.53,
    'zoom': 9,
  },
  Hamburg: {
    'latitude': 53.33,
    'longitude': 10.00,
    'zoom': 9,
  },
  Dusseldorf: {
    'latitude': 51.22,
    'longitude': 6.77,
    'zoom': 9,
  }
};

export type CitiesCoordinatesKeys = keyof typeof CITIES__COORDINATES;
