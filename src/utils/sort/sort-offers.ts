import sortingKey from '../../const/sorting-const.ts';
import {OfferFromList} from '../../types/offer.ts';

export const sortOffers = {
  [sortingKey.base]: (offers: OfferFromList[]) => [...offers],
  [sortingKey.decrease]: (offers: OfferFromList[]) => [...offers].slice().sort((a, b) => b.price - a.price),
  [sortingKey.increase]: (offers: OfferFromList[]) => [...offers].slice().sort((a, b) => a.price - b.price),
  [sortingKey.rating]: (offers: OfferFromList[]) => [...offers].slice().sort((a, b) => b.rating - a.rating),
};
