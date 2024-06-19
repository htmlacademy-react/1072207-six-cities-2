import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const/const.ts';

import Main from 'pages/main/main.tsx';
import Login from 'pages/login/login.tsx';
import Offer from 'pages/offer/offer.tsx';
import NotFound from 'pages/not-found/not-found.tsx';
import Favorites from 'pages/favorites/favorites.tsx';
import PrivateRoute from 'components/private-route/private-route.tsx';

import {useAppSelector} from 'hooks/use-app-selector.ts';
import {store} from '../../store';
import {fetchOffersAction} from '../../store/api-actions.ts';
store.dispatch(fetchOffersAction());


function App(): JSX.Element {
  const offersStore = useAppSelector((state) => state.offers);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />}/>
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Favorites offers={offersStore} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={<Offer offers={offersStore}/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
