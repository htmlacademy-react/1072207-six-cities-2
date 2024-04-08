// Получает в себя массив объявлений
// Из массива объявлений получает массив с уникальными городами
// Берет массив с уникальными городами и перебирает его
// На каждой итерации подставляет название города в Место для названия города
// Берет основной массив, перебирает его, на каждом офере который совпадает с текущим
// городом добавляет элемент с разметкой в Массив? или в объект с разметкой и отрисовывает его
// на второй итерации то же самое, отрисовывает после? надо пробовать.
//
//

import {OffersListProps} from '../offers-list/offers-list.tsx';
import FavoritesCardList from '../favorites-card-list/favorites-card-list.tsx';
import {OfferFromList} from '../../types/offer.ts';

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




function FavoritesList({offers} : OffersListProps) {
  const city = offers.map((item) => item.city.name);
  const cityWithAds = Array.from(new Set(city));
  // console.log(city);
  console.log(cityWithAds);

  // function filteringOffersArr(arr, condition) {
  //   const newArr = arr.filter(itemOffer) => itemOffer.city.name === condition);
  //
  //   return
  // }

  return (
    <ul className="favorites__list">
      {/*<li className="favorites__locations-items">*/}
      {/*  <div className="favorites__locations locations locations--current">*/}
      {/*    <div className="locations__item">*/}
      {/*      <a className="locations__item-link" href="#">*/}
      {/*        <span>Paris</span>*/}
      {/*      </a>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <FavoritesCardList offers={offers}/>*/}
      {/*</li>*/}
      {
        cityWithAds.map((item, index) => <FavoritesLocationItem key={`${item}-000123-id-key`} offersOneCity={offers.filter((itemOffer) => itemOffer.city.name === city[index])} city={city[index]} />)
      }



    </ul>
  );
}

export default FavoritesList;
