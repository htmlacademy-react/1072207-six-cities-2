import {MAX_NEARBY_OFFERS} from './const.ts';
import {OfferFromList} from '../../types/offer.ts';

export function getReadyNearbyOffers(offers: OfferFromList[]): OfferFromList[] {
  const newOffers: OfferFromList[] = [];

  offers.forEach((item, index) => {
    if (index < MAX_NEARBY_OFFERS) {
      newOffers.push(item);
    }
  });
  return newOffers;
}
