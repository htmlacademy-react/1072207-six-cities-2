import {OffersListProps} from 'components/offers-list/offers-list.tsx';
import FavoritesLocationItem from 'components/favorites-location-item/favorites-location-item.tsx';
import {OfferFromList} from '../../types/offer.ts';

type ObjectCites={
  [key: string]: number;
  // 'Amsterdam'?: number;
  // 'Paris'?: number;
}
// const arrA = ['Mordor','Chita', 'Paris','Mordor','Mordor','Chita'];

function FavoritesList({offers} : OffersListProps) {
  const city = offers.map((item) => item.city.name);
  const cityWithAds = Array.from(new Set(city));

  const objectCites: ObjectCites = {};
  function getObjCities(array: OffersListProps) {
    if (array.length !== undefined) {
      for (let i = 0; i < array.length; i++) {
        const itemArr: OfferFromList = array[i];
        const cityName: string = itemArr.city.name;
        // const cityName: string = (array[i]).city.name;

        if (cityName in objectCites) {
          objectCites[cityName] = ++objectCites[cityName];
        } else {
          objectCites[itemArr.city.name] = 1;
        }
      }
    }


  }
  getObjCities(offers);

  console.log(objectCites);

  return (
    <ul className="favorites__list">
      {
        cityWithAds.map((item, index) => (
          <FavoritesLocationItem
            key={`${item}-000123-id-key`}
            offersOneCity={offers.filter((itemOffer) => itemOffer.city.name === city[index])}
            city={city[index]}
          />)
        )
      }
    </ul>
  );
}

export default FavoritesList;
