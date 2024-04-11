import FavoritesLocationItem from 'components/favorites-location-item/favorites-location-item.tsx';
import {OfferFromList} from 'types/offer.ts';
import {getGroupedCities} from './utils.ts';

type FavoritesListProps={
  offers: OfferFromList[];
}

function FavoritesList({offers} : FavoritesListProps) {
  const uniqueCitiesMap = getGroupedCities(offers);

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
