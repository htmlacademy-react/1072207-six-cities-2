import cn from 'classnames';

type ButtonBookmarkProps={
  isFavorite: boolean;
  active?: boolean;
}

function ButtonBookmark({isFavorite, active = false}: ButtonBookmarkProps): JSX.Element {
  const additionalClass = cn(('place-card__bookmark-button button'), {'place-card__bookmark-button--active': active});
  return (
    <button className={additionalClass}
      type="button"
    >
      <svg
        className="place-card__bookmark-icon"
        width={18}
        height={19}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

export default ButtonBookmark;
