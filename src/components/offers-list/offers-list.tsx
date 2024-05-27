import {OfferFromList} from 'types/offer.ts';
import PlaceCard from 'components/place-card/place-card.tsx';
import {useState} from 'react';
import cn from 'classnames';

type OffersListProps = {
  offers: OfferFromList[];
  cityList?: boolean;
  nearList?: boolean;
}

function OffersList({offers, cityList = false, nearList = false}: OffersListProps): JSX.Element {
  const [, setCard] = useState<string | null>(null);
  const additionalClasses = cn(
    'places__list',
    {
      'cities__places-list': cityList,
      'near-places__list': nearList,
    }
  );


  return (
    <div className={additionalClasses}>
      {
        offers.map((item) =>
          (<PlaceCard key={item.id} offer={item} cityList={cityList} nearList={nearList} onMouseToCard={() => setCard(item.id)} onMouseLeaveCard={() => setCard(null)} blockName="cities"/>)
        )
      }
    </div>
  );
}

export default OffersList;
