import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  elem: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, elem} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? elem
      // ? <Navigate to={AppRoute.Login} />
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
