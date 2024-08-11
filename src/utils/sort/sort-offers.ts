import Sorting from '../../const/sorting-const.ts';
import {OfferFromList} from '../../types/offer.ts';

export const sortOffers = {
  [Sorting.base]: (offers: OfferFromList[]) => [...offers],
  [Sorting.decrease]: (offers: OfferFromList[]) => [...offers].sort((a, b) => b.price - a.price),
  [Sorting.increase]: (offers: OfferFromList[]) => [...offers].sort((a, b) => a.price - b.price),
  [Sorting.rating]: (offers: OfferFromList[]) => [...offers].sort((a, b) => b.rating - a.rating),
};
