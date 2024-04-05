import {OfferFromList} from 'types/offer.ts';
import Rating from 'components/rating/rating.tsx';
import Badge from 'components/badge-premium/badge.tsx';
import ButtonBookmark from 'components/button-bookmark/button-bookmark.tsx';
import {Link} from 'react-router-dom';
import {generatePath} from 'react-router-dom';
import {AppRoute} from 'const.ts';

type PlaceCardProps={
  offer: OfferFromList;
  onMouseToCard: () => void;
  onMouseLeaveCard: () => void;
}

function PlaceCard({offer, onMouseToCard, onMouseLeaveCard}: PlaceCardProps): JSX.Element {
  return (
    <article className="cities__card place-card" onMouseOver={onMouseToCard} onMouseLeave={onMouseLeaveCard}>
      {offer.isPremium && <Badge className="place-card__mark" text="Premium" />}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={260}
            height={200}
            alt={offer.title}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <ButtonBookmark isFavorite={offer.isFavorite}/>
        </div>
        <Rating rating={offer.rating} calculusSystem={5} />
        <h2 className="place-card__name">`
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
