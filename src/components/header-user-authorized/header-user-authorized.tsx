import {Link} from 'react-router-dom';
import {AppRoute} from '../../const/const.ts';
import {logoutAction} from '../../store/user-process/api-actions-user.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getUserEmail} from '../../store/user-process/user-process.selectors.ts';
import {useEffect} from 'react';
import {loadFavoritesOffersAction} from '../../store/favorites-process/api-actions-favorites.ts';
import {getFavoriteOffers, getSendingStatus} from '../../store/favorites-process/favorites-process.selectors.ts';

function HeaderUserAuthorized(): JSX.Element{
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    dispatch(logoutAction());
  };
  const sendingFavoriteOffersStatus = useAppSelector(getSendingStatus);
  const userEmail = useAppSelector(getUserEmail);

  useEffect(() => {
    dispatch(loadFavoritesOffersAction());
  }, [sendingFavoriteOffersStatus]);

  const favoriteOffers = useAppSelector(getFavoriteOffers);
  let numberFavoriteOffers = 0;

  if (favoriteOffers.length > 0) {
    numberFavoriteOffers = favoriteOffers.length;
  }


  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoute.Favorites}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">{userEmail}</span>
          <span className="header__favorite-count">{numberFavoriteOffers}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          onClick={() => handleSignOut()}
          to={AppRoute.Main}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

export default HeaderUserAuthorized;
