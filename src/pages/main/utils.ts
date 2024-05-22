import {OfferFromList} from 'types/offer.ts';

export const getOffersRelevantCity = (arrayOffers: OfferFromList[], city: string) => {
  const offersMap = [];
  for (const offerItem of arrayOffers) {
    const cityName = offerItem.city.name;

    if (cityName === city) {
      offersMap.push(offerItem);
    }
  }
  return offersMap;
};
