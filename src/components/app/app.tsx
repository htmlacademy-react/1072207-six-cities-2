import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import {AppRoute, AuthorizationStatus} from '../../const/const.ts';
import {AppRoute} from '../../const/const.ts';
// import {ToastContainer} from 'react-toastify';
// import {ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import Main from 'pages/main/main.tsx';
import Login from 'pages/login/login.tsx';
import Offer from 'pages/offer/offer.tsx';
import NotFound from 'pages/not-found/not-found.tsx';
import Favorites from 'pages/favorites/favorites.tsx';
import PrivateRoute from 'components/private-route/private-route.tsx';

import {useAppSelector} from 'hooks/use-app-selector.ts';
import {store} from '../../store';
// import {store} from '../../store/index.ts';
import {loadOffersAction} from '../../store/api-actions.ts';
import {getOffers} from '../../store/offers-data/offers-data.selectors.ts';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selectors.ts';
// store.dispatch(loadOffersAction());


function App(): JSX.Element {
  const offersStore = useAppSelector(getOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  // console.log(authStatus);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />}/>
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Favorites} element={
          // <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
          <PrivateRoute>
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
