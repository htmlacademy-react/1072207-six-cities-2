// Возвращает отфильтрованный и отсортированный список объявлений
import {OfferFromList} from 'types/offer.ts';
import {CitiesCoordinatesKeys} from '../const/city-points.ts';
import {useAppSelector} from './use-app-selector.ts';
import {useEffect, useState} from 'react';
import {sortOffers} from '../utils/sort/sort-offers.ts';
const useRelevantOffers = () => {
  const selectedCityStore: CitiesCoordinatesKeys = useAppSelector((state) => state.selectedCity);
  const offersStore = useAppSelector((state) => state.offers);
  const [relevantOffers, setRelevantOffers] = useState<OfferFromList[]>(offersStore);
  const sortingPositionStore = useAppSelector((state) => state.sortingPosition);

  useEffect(() => {
    if (offersStore && sortingPositionStore) {
      const filteredOffers: OfferFromList[] = [...offersStore].filter((offer) => offer.city.name === selectedCityStore);
      // const sortFunction = sortOffers[sortingPositionStore];
      // const sortedOffers: OfferFromList[] = sortFunction(filteredOffers);
      const sortedOffers: OfferFromList[] = sortOffers[sortingPositionStore](filteredOffers);
      setRelevantOffers(sortedOffers);
    }
  }, [selectedCityStore, offersStore, sortingPositionStore]);
  return relevantOffers;
};

export default useRelevantOffers;
