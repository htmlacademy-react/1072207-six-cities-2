import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const/const.ts';
import Main from 'pages/main/main.tsx';
import Login from 'pages/login/login.tsx';
import Offer from 'pages/offer/offer.tsx';
import NotFound from 'pages/not-found/not-found.tsx';
import Favorites from 'pages/favorites/favorites.tsx';
import PrivateRoute from 'components/private-route/private-route.tsx';
import {useAppSelector} from 'hooks/use-app-selector.ts';
import {getOffers, getStatus} from '../store/offers-data/offers-data.selectors.ts';
import {RequestStatus} from '../types/request-status.ts';
import LoadingMessage from '../components/alerts/loading-message.tsx';
import ErrorMessage from '../components/alerts/error-message.tsx';
import {getAuthorizationStatus} from '../store/user-process/user-process.selectors.ts';

function App(): JSX.Element {
  // const offersStore = useAppSelector(getOffers);
  const offersStatus = useAppSelector(getStatus);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || offersStatus === RequestStatus.Loading) {
    return <LoadingMessage />;
  }

  if (offersStatus === RequestStatus.Error) {
    return <ErrorMessage />;
  }

  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Main />}/>
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={AppRoute.Favorites} element={
        <PrivateRoute>
          {/*<Favorites offers={offersStore} />*/}
          <Favorites offers={[]} />
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.Offer} element={<Offer />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
