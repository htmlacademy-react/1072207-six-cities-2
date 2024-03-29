import {OfferFromList} from 'mocks/offers.ts';
import PlaceCard from '../place-card/place-card.tsx';
import {useState} from 'react';

type OffersListProps = {
  offers: OfferFromList[];
}

function OffersList({offers}: OffersListProps): JSX.Element {
  const [, setCard] = useState<string | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((item) =>
          <PlaceCard key={item.id} offer={item} setCard={() => setCard(item.id)}/>
        )
      }
    </div>
  );
}

export default OffersList;
