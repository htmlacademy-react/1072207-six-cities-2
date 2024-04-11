import {OfferFromList} from 'types/offer.ts';
import PlaceCard from 'components/place-card/place-card.tsx';
import {useState} from 'react';

type OffersListProps = {
  offers: OfferFromList[];
}

function OffersList({offers}: OffersListProps): JSX.Element {
  const [, setCard] = useState<string | null>(null);

  return (
    <div className="cities__places-list places__list">
      {
        offers.map((item) =>
          (<PlaceCard key={item.id} offer={item} onMouseToCard={() => setCard(item.id)} onMouseLeaveCard={() => setCard(null)} blockName="cities"/>)
        )
      }
    </div>
  );
}

export default OffersList;
