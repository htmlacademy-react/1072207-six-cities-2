import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {
  loadCommentsToOfferAction,
  loadNearbyOffersAction,
  loadOfferAction
} from '../../store/offer-page-data/api-actions-offer.ts';
import {
  getCommentsOffer,
  getNearbyOffers,
  getOffer, getSendingComment,
  getStatusOffer
} from '../../store/offer-page-data/offer-page-data.selectors.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {useEffect} from 'react';
import {RequestStatus} from '../../types/request-status.ts';
import LoadingMessage from '../../components/alerts/loading-message.tsx';
import Layout from 'components/layout/layout.tsx';
import Header from '../../components/header/header.tsx';
import OfferGallery from '../../components/offer-gallery/offer-gallery.tsx';
import Badge from '../../components/badge-premium/badge.tsx';
import ButtonBookmark from '../../components/button-bookmark/button-bookmark.tsx';
import Rating from '../../components/rating/rating.tsx';
import {capitalizeFirstLetter} from '../../utils/font/capitalize-first-letter.ts';
import OfferInside from '../../components/offer-inside/offer-inside.tsx';
import OfferHost from '../../components/offer-host/offer-host.tsx';
import ReviewsList from '../../components/reviews-list/reviews-list.tsx';
import ReviewsForm from '../../components/reviews-form/reviews-form.tsx';
import OffersList from '../../components/offers-list/offers-list.tsx';
import Map from '../../components/map/map.tsx';
import NotFound from '../../components/alerts/not-found.tsx';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selectors.ts';
import {AuthorizationStatus} from '../../const/const.ts';



function Offer(): JSX.Element | null {
  const params = useParams();
  const offerStatus = useAppSelector(getStatusOffer);
  const sendingComment = useAppSelector(getSendingComment);
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);
  let openFormComments = false;


  useEffect(() => {
    if (params.id !== undefined && params.id !== '') {
      dispatch(loadOfferAction(params.id));
    }
  }, [dispatch, params.id]);

  useEffect(() => {
    if (params.id !== undefined && params.id !== '') {
      dispatch(loadNearbyOffersAction(params.id));
    }
  }, [dispatch, params.id]);

  useEffect(() => {
    if (params.id !== undefined && params.id !== '') {
      dispatch(loadCommentsToOfferAction(params.id));
    }
  }, [dispatch, params.id, sendingComment]);

  // useEffect(() => {
  //   if (authStatus === AuthorizationStatus.Auth) {
  //     console.log('authStatus', authStatus);
  //     console.log(openFormComments);
  //     openFormComments = true;
  //     console.log(openFormComments);
  //   }
  // }, [authStatus]);

  const offerLoad = useAppSelector(getOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const comments = useAppSelector(getCommentsOffer);



  if (offerStatus === RequestStatus.Loading) {
    return <LoadingMessage/>;
  }

  if (offerStatus === RequestStatus.Error) {
    return <NotFound/>;
  }

  if (!offerLoad) {
    return null;
  }

  if (authStatus === AuthorizationStatus.Auth) {
    openFormComments = true;
  }

  const city = offerLoad.city.name;

  return (
    <Layout header={<Header/>}>
      <main className="page__main page__main--offer">
        <section className="offer">

          <OfferGallery images={offerLoad.images}/>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {offerLoad.isPremium && <Badge className="offer__mark" text="Premium" />}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offerLoad.title}
                </h1>
                <ButtonBookmark isFavorite={offerLoad.isFavorite} modifier='offer'/>
              </div>
              <Rating rating={offerLoad.rating} calculusSystem={5} className={'offer'} />

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
                  Количество отзывов · <span className="reviews__amount">{comments.length}</span>
                </h2>
                <ReviewsList reviews={comments}/>
                {openFormComments && <ReviewsForm/>}
              </section>
            </div>
          </div>
          <Map className="offer__map" offers={nearbyOffers} city={city}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OffersList offers={nearbyOffers} listType='near'/>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default Offer;
