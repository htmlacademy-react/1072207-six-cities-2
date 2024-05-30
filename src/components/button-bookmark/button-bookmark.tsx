import cn from 'classnames';

type ButtonBookmarkProps={
  isFavorite: boolean;
  modifier: 'offer' | 'card' ;
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

function ButtonBookmark({isFavorite, modifier}: ButtonBookmarkProps): JSX.Element {
  const size = pageOptions[modifier].sizes;
  const additionalClass = cn(
    `${pageOptions[modifier].modifierClass}__bookmark-button button`,
    {[`${pageOptions[modifier].modifierClass}__bookmark-button--active`]: isFavorite}
  );

  return (
    <button className={additionalClass}
      type="button"
    >
      <svg
        className={`${pageOptions[modifier].modifierClass}__bookmark-icon`}
        width={size.width}
        height={size.height}
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
