import cn from 'classnames';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {sendingFavoritesStatusAction} from '../../store/favorites-process/api-actions-favorites.ts';
import {FAVORITE_STATUS} from '../../const/favorite-status.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getIsAuth} from '../../store/user-process/user-process.selectors.ts';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../const/const.ts';
import {
  getFavoriteOffers,
} from '../../store/favorites-process/favorites-process.selectors.ts';

type ButtonBookmarkProps={
  modifier: 'offer' | 'card' ;
  offerId: string;
}

const pageOptions = {
  card: {
    modifierClass: 'place-card',
    sizes: {
      width: 18,
      height: 19,
    }
  },
  offer: {
    modifierClass: 'offer',
    sizes: {
      width: 31,
      height: 33,
    }
  },
};

function ButtonBookmark({modifier, offerId}: ButtonBookmarkProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAppSelector(getIsAuth);
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  const size = pageOptions[modifier].sizes;
  let favoriteStatus = false;

  const isFavoriteOffer = (id: string) => favoriteOffers.some((offer) => offer.id === id);

  if (isAuth) {
    favoriteStatus = isFavoriteOffer(offerId);
  }

  const changeStatusFavorite = () => {
    if (!isAuth) {
      navigate(AppRoute.Login);
    }

    if (isAuth) {
      const status = favoriteStatus ? FAVORITE_STATUS.RemoveOfferToFavorite : FAVORITE_STATUS.AdToFavorite;
      dispatch(sendingFavoritesStatusAction({offerId, status: status}));
    }
  };

  const additionalClass = cn(
    `${pageOptions[modifier].modifierClass}__bookmark-button button`,
    {[`${pageOptions[modifier].modifierClass}__bookmark-button--active`]: favoriteStatus}
  );

  return (
    <button className={additionalClass}
      type="button"
      onClick={changeStatusFavorite}
    >
      <svg
        className={`${pageOptions[modifier].modifierClass}__bookmark-icon`}
        width={size.width}
        height={size.height}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">
        {favoriteStatus ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

export default ButtonBookmark;
