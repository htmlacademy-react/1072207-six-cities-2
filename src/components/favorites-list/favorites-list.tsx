import {OffersListProps} from 'components/offers-list/offers-list.tsx';
import FavoritesLocationItem from 'components/favorites-location-item/favorites-location-item.tsx';

function FavoritesList({offers} : OffersListProps) {
  const city = offers.map((item) => item.city.name);
  const cityWithAds = Array.from(new Set(city));

  return (
    <ul className="favorites__list">
      {
        cityWithAds.map((item, index) => <FavoritesLocationItem key={`${item}-000123-id-key`} offersOneCity={offers.filter((itemOffer) => itemOffer.city.name === city[index])} city={city[index]} />)
      }
    </ul>
  );
}

export default FavoritesList;
