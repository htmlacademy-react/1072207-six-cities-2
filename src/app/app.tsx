import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const/const.ts';
import {useAppSelector} from 'hooks/use-app-selector.ts';
import {RequestStatus} from '../types/request-status.ts';
import PrivateRoute from 'components/private-route/private-route.tsx';
import {getStatus} from '../store/offers-data/offers-data.selectors.ts';
import {getAuthorizationStatus, getIsAuth} from '../store/user-process/user-process.selectors.ts';
import {loadFavoritesOffersAction} from '../store/favorites-process/api-actions-favorites.ts';
import {lazy, useEffect} from 'react';
import {useAppDispatch} from '../hooks/use-app-dispatch.ts';
import ErrorMessage from '../components/alerts/error-message.tsx';
import LoadingMessage from '../components/alerts/loading-message.tsx';
import {ErrorBoundary} from 'react-error-boundary';
import {Suspense} from 'react';

import Main from 'pages/main/main.tsx';

const Login = lazy(() => import('pages/login/login'));
const Favorites = lazy(() => import('../pages/favorites/favorites.tsx'));
const Offer = lazy(() => import('pages/offer/offer'));
const ErrorPage = lazy(() => import('../pages/not-found/not-found.tsx'));

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
    <ErrorBoundary fallback={<ErrorMessage message={'Error App(Ошибка приложения)'} />}>

      <Suspense fallback={<LoadingMessage />}>
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
      </Suspense>
    </ErrorBoundary>

  );
}

export default App;
