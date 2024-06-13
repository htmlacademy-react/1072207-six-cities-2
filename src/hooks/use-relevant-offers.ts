import {useAppSelector} from './use-app-selector.ts';
import {sortOffers} from '../utils/sort/sort-offers.ts';

const useRelevantOffers = () => {
  const selectedCity = useAppSelector((state) => state.selectedCity);
  const offers = useAppSelector((state) => state.offers);
  const sortingType = useAppSelector((state) => state.sortingType);

  const filteredOffers = [...offers].filter((offer) => offer.city.name === selectedCity);

  return sortOffers[sortingType](filteredOffers);
};

export default useRelevantOffers;
