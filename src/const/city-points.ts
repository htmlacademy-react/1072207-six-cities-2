export const CITIES__COORDINATES = {
  Paris: {
    'latitude': 48.85,
    'longitude': 2.38,
    'zoom': 11,
  },
  Cologne: {
    'latitude': 50.95,
    'longitude': 6.98,
    'zoom': 11,
  },
  Brussels: {
    'latitude': 50.85,
    'longitude': 4.36,
    'zoom': 11,
  },
  Amsterdam: {
    'latitude': 52.4,
    'longitude': 4.92,
    'zoom': 11,
  },
  Hamburg: {
    'latitude': 53.55,
    'longitude': 10.03,
    'zoom': 11,
  },
  Dusseldorf: {
    'latitude': 51.22,
    'longitude': 6.79,
    'zoom': 11,
  }
};

export type CitiesCoordinatesKeys = keyof typeof CITIES__COORDINATES;
