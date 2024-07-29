import cn from 'classnames';
import {useEffect, useState} from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {sendingFavoritesStatusAction} from '../../store/favorites-process/api-actions-favorites.ts';
import {FAVORITE_STATUS} from '../../const/favorite-status.ts';

type ButtonBookmarkProps={
  isFavorite: boolean;
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

function ButtonBookmark({isFavorite, modifier, offerId}: ButtonBookmarkProps): JSX.Element {
  const dispatch = useAppDispatch();
  const size = pageOptions[modifier].sizes;

  const [favoriteStatus, setFavoriteStatus] = useState<boolean>();
  useEffect(() => {
    setFavoriteStatus(isFavorite);
  }, [isFavorite]);

  const changeStatusFavorite = () => {
    if (favoriteStatus === false) {
      setFavoriteStatus(!favoriteStatus);
      dispatch(sendingFavoritesStatusAction({offerId, status: FAVORITE_STATUS.AdToFavorite}));
    }

    if (favoriteStatus === true) {
      setFavoriteStatus(!favoriteStatus);
      dispatch(sendingFavoritesStatusAction({offerId, status: FAVORITE_STATUS.RemoveOfferToFavorite}));
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
