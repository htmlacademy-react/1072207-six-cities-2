import {OfferFromList} from 'types/offer.ts';
import Rating from 'components/rating/rating.tsx';
import Badge from 'components/badge-premium/badge.tsx';
import {Link} from 'react-router-dom';
import {generatePath} from 'react-router-dom';
import {AppRoute} from 'const.ts';

type FavoritesCardProps={
  offer: OfferFromList;
}

function FavoritesCard({offer}: FavoritesCardProps): JSX.Element {
  return (
    <article className="favorites__card place-card">
      {offer.isPremium && <Badge className="place-card__mark" text="Premium" />}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={150}
            height={110}
            alt={offer.title}
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">
                            /&nbsp;night
            </span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <Rating rating={offer.rating} calculusSystem={5} />
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, {id: offer.id})}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default FavoritesCard;
