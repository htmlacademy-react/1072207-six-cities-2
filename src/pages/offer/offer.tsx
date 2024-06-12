import {OfferFromList} from 'types/offer.ts';
import {CitiesCoordinatesKeys} from '../../const/city-points.ts';
import {reviews} from '../../mocks/reviews.ts';
import {useParams} from 'react-router-dom';
import Layout from 'components/layout/layout.tsx';
import Header from 'components/header/header.tsx';
import OffersList from '../../components/offers-list/offers-list.tsx';
import ReviewsList from '../../components/reviews-list/reviews-list.tsx';
import ReviewsForm from 'components/reviews-form/reviews-form.tsx';
import Map from 'components/map/map.tsx';
import Badge from 'components/badge-premium/badge.tsx';
import OfferGallery from '../../components/offer-gallery/offer-gallery.tsx';
import ButtonBookmark from '../../components/button-bookmark/button-bookmark.tsx';
import Rating from '../../components/rating/rating.tsx';
import {capitalizeFirstLetter} from '../../utils/font/capitalize-first-letter.ts';
import OfferInside from '../../components/offer-inside/offer-inside.tsx';
import OfferHost from '../../components/offer-host/offer-host.tsx';

import {offerMocks} from '../../mocks/offerMocks.ts';

type OfferProps={
  offers: OfferFromList[];
}

function Offer({offers}: OfferProps): JSX.Element | null {
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id);

  const offerLoad = offerMocks;

  if (!offer) {
    return null;
  }

  const city = offer.city.name as CitiesCoordinatesKeys;
  const relevantOffers: OfferFromList[] = offers.filter((offerCity) => offerCity.city.name === city);
  return (
    <Layout header={<Header/>}>
      <main className="page__main page__main--offer">
        <section className="offer">

          <OfferGallery images={offerLoad.images}/>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && <Badge className="offer__mark" text="Premium" />}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offerLoad.title}
                </h1>
                <ButtonBookmark isFavorite={offerLoad.isFavorite} modifier='offer'/>
              </div>
              <Rating rating={offer.rating} calculusSystem={5} className={'offer'} />

              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalizeFirstLetter(offerLoad.type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offerLoad.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offerLoad.maxAdults} adults
                </li>
              </ul>

              <div className="offer__price">
                <b className="offer__price-value">€{offerLoad.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <OfferInside goods={offerLoad.goods} />

              <OfferHost
                name={offerLoad.host.name}
                avatarUrl={offerLoad.host.avatarUrl}
                isPro={offerLoad.host.isPro}
                description={offerLoad.description}
              />

              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Количество отзывов · <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews}/>
                <ReviewsForm />
              </section>
            </div>
          </div>
          <Map className="offer__map" offers={relevantOffers} city={city}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OffersList offers={relevantOffers} listType='near'/>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default Offer;
