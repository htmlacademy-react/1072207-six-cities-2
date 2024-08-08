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

export enum NameSpace {
  Offers = 'OFFERS',
  User = 'USER',
  App = 'APP',
  Offer = 'OFFER',
  Favorites = 'FAVORITES',
}

export enum APIRoute {
  Offers = '/offers',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
}
