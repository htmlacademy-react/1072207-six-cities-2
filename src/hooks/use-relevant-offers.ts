import {useAppSelector} from './use-app-selector.ts';
import {sortOffers} from '../utils/sort/sort-offers.ts';
import {getOffers, getSelectedCity, getSortingType} from '../store/offers-data/offers-data.selectors.ts';

const useRelevantOffers = () => {
  const selectedCity = useAppSelector(getSelectedCity);
  const offers = useAppSelector(getOffers);
  const sortingType = useAppSelector(getSortingType);

  const filteredOffers = [...offers].filter((offer) => offer.city.name === selectedCity);

  return sortOffers[sortingType](filteredOffers);
};

export default useRelevantOffers;
