import FavoritesLocationItem from 'components/favorites-location-item/favorites-location-item.tsx';
import {getGroupedCities} from './utils.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getFavoriteOffers} from '../../store/favorites-process/favorites-process.selectors.ts';

function FavoritesList() {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const uniqueCitiesMap = getGroupedCities(favoriteOffers);

  return (
    <ul className="favorites__list">
      {
        Object.entries(uniqueCitiesMap).map(([nameCity, offersCity]) => (
          <FavoritesLocationItem
            key={nameCity}
            offersOneCity={offersCity}
            city={nameCity}
          />
        ))
      }
    </ul>
  );
}

export default FavoritesList;
