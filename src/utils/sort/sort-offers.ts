import sorting from '../../const/sorting-const.ts';
import {OfferFromList} from '../../types/offer.ts';

export const sortOffers = {
  [sorting.base]: (offers: OfferFromList[]) => [...offers],
  [sorting.decrease]: (offers: OfferFromList[]) => [...offers].sort((a, b) => b.price - a.price),
  [sorting.increase]: (offers: OfferFromList[]) => [...offers].sort((a, b) => a.price - b.price),
  [sorting.rating]: (offers: OfferFromList[]) => [...offers].sort((a, b) => b.rating - a.rating),
};
