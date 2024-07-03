import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from 'const/const.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selectors.ts';

type PrivateRouteProps = {
    children: JSX.Element;
}

function PrivateRoute({children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
