import {OfferFromList} from 'types/offer.ts';
import FavoritesCardList from 'components/favorites-card-list/favorites-card-list.tsx';

type FavoritesLocationItem={
  offersOneCity: OfferFromList[];
  city: string;
}

function FavoritesLocationItem({offersOneCity, city}: FavoritesLocationItem) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <FavoritesCardList offers={offersOneCity}/>
    </li>
  );
}

export default FavoritesLocationItem;
