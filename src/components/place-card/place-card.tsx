import {OfferT} from 'mocks/offers.ts';

type PlaceCardProps = {
  offer: OfferT;
  giveActiveCard: () => void;
}

function PlaceCard({offer, giveActiveCard}: PlaceCardProps): JSX.Element {
  const rating: number = offer.rating * 2;

  return (
    <article className="cities__card place-card" onMouseOver={giveActiveCard}>
      {offer.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={offer.images[0]}
            width={260}
            height={200}
            alt={offer.description}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}0%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">
            {offer.title}
          </a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default PlaceCard;
