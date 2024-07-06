export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
  RequestAuth = 'REQUEST_AUTHORIZATION',
  Error = 'ERROR',
}

// todo проверить все ли имена используются?жду то тестов.
export enum NameSpace {
  Offers = 'OFFERS',
  User = 'USER',
  App = 'APP',
  Main = 'MAIN',
  Offer = 'OFFER',
  NearPlaces = 'NEAR_PLACES',
  Favorites = 'FAVORITES',
  Reviews = 'REVIEWS',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}
