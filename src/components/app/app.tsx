import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';

import MainPage from '../../pages/main/main.tsx';
import LoginPage from '../../pages/login/login.tsx';
import OfferPage from '../../pages/offer/offer.tsx';
import NotFound from '../../pages/NotFound/NotFound.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import FavoritesPage from '../../pages/favorites/favorites.tsx';

const DataCities = {
  TotalOffers: 5
};

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}
          element={<MainPage totalOffers={DataCities.TotalOffers}/>}
        />
        <Route path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route path={AppRoute.Favorites}
          element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} elem={<FavoritesPage />}/>}
        />
        <Route path={AppRoute.Offer}
          element={<OfferPage />}
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
