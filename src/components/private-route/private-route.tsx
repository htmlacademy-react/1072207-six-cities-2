import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from 'const/const.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selectors.ts';
import {useStore} from 'react-redux';

type PrivateRouteProps = {
    // authorizationStatus: AuthorizationStatus;
    children: JSX.Element;
}

function PrivateRoute({children }: PrivateRouteProps): JSX.Element {
  const store = useStore();
  console.log(store.getState());

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  console.log('PrivateRoute page');
  console.log(authorizationStatus);
  console.log(AuthorizationStatus.Auth);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
