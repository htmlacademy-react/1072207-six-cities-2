import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const/const.ts';
import Main from 'pages/main/main.tsx';
import Login from 'pages/login/login.tsx';
import Offer from 'pages/offer/offer.tsx';
import ErrorPage from 'pages/not-found/not-found.tsx';
import Favorites from 'pages/favorites/favorites.tsx';
import PrivateRoute from 'components/private-route/private-route.tsx';
import {useAppSelector} from 'hooks/use-app-selector.ts';
import {getStatus} from '../store/offers-data/offers-data.selectors.ts';
import {RequestStatus} from '../types/request-status.ts';
import LoadingMessage from '../components/alerts/loading-message.tsx';
import ErrorMessage from '../components/alerts/error-message.tsx';
import {getAuthorizationStatus, getIsAuth} from '../store/user-process/user-process.selectors.ts';
import {loadFavoritesOffersAction} from '../store/favorites-process/api-actions-favorites.ts';
import {useAppDispatch} from '../hooks/use-app-dispatch.ts';
import {useEffect} from 'react';


function App(): JSX.Element {
  const offersStatus = useAppSelector(getStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = useAppSelector(getIsAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(loadFavoritesOffersAction());
    }
  }, [authorizationStatus]);


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
          <Favorites />
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.Offer} element={<Offer />}/>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
