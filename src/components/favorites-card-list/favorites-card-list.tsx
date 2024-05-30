import {OfferFromList} from 'types/offer.ts';
import PlaceCard from 'components/place-card/place-card.tsx';

export type FavoritesListProps={
  offers: OfferFromList[];
}

function FavoritesCardList({offers}: FavoritesListProps): JSX.Element {
  return (
    <div className="favorites__places">
      {
        offers.map((item) => <PlaceCard key={item.id} offer={item} listType='favorites'/>
        )
      }
    </div>
  );
}

export default FavoritesCardList;
