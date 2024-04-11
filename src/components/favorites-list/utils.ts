import {OfferFromList} from 'types/offer.ts';

type CitiesMap={
  [key: string]: OfferFromList[];
}

export const getGroupedCities = (arrayOffers: OfferFromList[]) => {
  const citiesMap: CitiesMap = {};
  for (const cityItem of arrayOffers) {
    const cityName = cityItem.city.name;

    if (citiesMap[cityName] === undefined) {
      citiesMap[cityName] = [];
    }
    citiesMap[cityName].push(cityItem);
  }
  return citiesMap;
};
