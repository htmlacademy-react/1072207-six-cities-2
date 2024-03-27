import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';

import Main from 'pages/main/main.tsx';
import Login from 'pages/login/login.tsx';
import Offer from 'pages/offer/offer.tsx';
import NotFound from 'pages/not-found/not-found.tsx';
import PrivateRoute from 'components/private-route/private-route.tsx';
import Favorites from 'pages/favorites/favorites.tsx';

import {OfferT} from 'mocks/offers.ts';
// import {ReviewT} from 'mocks/reviews.ts';

type AppProps = {
  offers: OfferT[];
  // reviews: ReviewT[];
}

function App({offers}: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}
          element={
            <Main
              // totalOffers={DataCities.TotalOffers}
              offers={offers}
            />
          }
        />
        <Route path={AppRoute.Login}
          element={<Login />}
        />
        <Route path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer}
          element={<Offer />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
