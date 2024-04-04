import {OfferFromList} from 'types/offer.ts';
import FavoritesCard from 'components/favorites-card/favorites-card.tsx';

export type FavoritesListProps = {
  offers: OfferFromList[];
}

function FavoritesCardList({offers}: FavoritesListProps): JSX.Element {
  return (
    <div className="favorites__places">
      {
        offers.map((item) =>
          <FavoritesCard key={item.id} offer={item} />
        )
      }
    </div>
  );
}

export default FavoritesCardList;
