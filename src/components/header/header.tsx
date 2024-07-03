import Logo from '../logo/logo.tsx';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selectors.ts';
import {AuthorizationStatus} from '../../const/const.ts';
import HeaderUserAuthorized from '../header-user-authorized/header-user-authorized.tsx';
import HeaderUserNotAuthorized from '../header-user-not-authorized/header-user-not-authorized.tsx';

function Header(): JSX.Element{
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userAuthorize = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo blockName="header" />
          </div>
          <nav className="header__nav">
            {userAuthorize ? <HeaderUserAuthorized /> : <HeaderUserNotAuthorized/> }
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
