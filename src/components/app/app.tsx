import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const/const.ts';

import Main from 'pages/main/main.tsx';
import Login from 'pages/login/login.tsx';
import Offer from 'pages/offer/offer.tsx';
import NotFound from 'pages/not-found/not-found.tsx';
import Favorites from 'pages/favorites/favorites.tsx';
import PrivateRoute from 'components/private-route/private-route.tsx';

import {OfferFromList} from 'types/offer.ts';

import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {useSelector} from 'react-redux';
import {store} from '../../store';

type AppProps={
  offers: OfferFromList[];
}

// Не работает
// const citySelected = useAppSelector((state) => state.selectedCity);
// const citySelected = useSelector((state) => state.selectedCity);

// Работает.
const citySelected = store.getState().selectedCity;


console.log(citySelected);

function App({offers}: AppProps): JSX.Element {

  // const citySelected = useAppSelector((state) => state.selectedCity);
  console.log(citySelected);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main offers={offers} />}/>
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><Favorites offers={offers} /></PrivateRoute>}/>
        <Route path={AppRoute.Offer} element={<Offer offers={offers}/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
