import {OfferFromList} from 'types/offer.ts';
// import FavoritesCard from 'components/favorites-card/favorites-card.tsx';
import PlaceCard from '../place-card/place-card.tsx';

export type FavoritesListProps={
  offers: OfferFromList[];
}

function FavoritesCardList({offers}: FavoritesListProps): JSX.Element {

  // console.log(offers[city]);
  // const cityWithAds = [];

  // const city = offers.map((item) => item.city.name);
  // const cityWithAds = Array.from(new Set(city));
  // console.log(city);
  // console.log(cityWithAds);

  return (
    <div className="favorites__places">
      {
        offers.map((item) => <PlaceCard key={item.id} offer={item} blockName="favorites" active/>
          // <FavoritesCard key={item.id} offer={item} />
        )
      }
    </div>
  );
}

export default FavoritesCardList;
