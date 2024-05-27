import {OfferFromList} from 'types/offer.ts';
import Rating from 'components/rating/rating.tsx';
import Badge from 'components/badge-premium/badge.tsx';
import ButtonBookmark from 'components/button-bookmark/button-bookmark.tsx';
import {Link} from 'react-router-dom';
import {generatePath} from 'react-router-dom';
import {AppRoute} from 'const.ts';

type PlaceCardProps={
  offer: OfferFromList;
  onMouseToCard?: () => void;
  onMouseLeaveCard?: () => void;
  active?: boolean;
  listType: 'cities' | 'near' | 'favorites';
}

const options = {
  cities: {
    classToPlaceCard: 'cities',
    width: 260,
    height: 200,
    info: 'place-card__info',
  },
  favorites: {
    classToPlaceCard: 'favorites',
    width: 150,
    height: 110,
    info: 'favorites__card-info place-card__info',
  },
  near: {
    classToPlaceCard: 'near-places',
    width: 260,
    height: 200,
    info: 'place-card__info',
  },
};

function PlaceCard({offer, onMouseToCard, onMouseLeaveCard, active, listType}: PlaceCardProps): JSX.Element {
  const option = options[listType];
  const additionalClasses: string = option.classToPlaceCard;

  return (
    <article className={`${additionalClasses}__card place-card`} onMouseOver={onMouseToCard} onMouseLeave={onMouseLeaveCard}>
      {offer.isPremium && <Badge className="place-card__mark" text="Premium" />}
      <div className={`${additionalClasses}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={option.width}
            height={option.height}
            alt={offer.title}
          />
        </a>
      </div>
      <div className={option.info}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <ButtonBookmark isFavorite={offer.isFavorite} active={active}/>
        </div>
        <Rating rating={offer.rating} calculusSystem={5} className={'place-card'} />
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

export default PlaceCard;
