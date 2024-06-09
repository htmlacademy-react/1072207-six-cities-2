import {OfferFromList} from 'types/offer.ts';
import PlaceCard from 'components/place-card/place-card.tsx';
import {useState} from 'react';
import {store} from '../../store';
import {updateActiveOffer} from '../../store/action.ts';

type OffersListProps = {
  offers: OfferFromList[];
  listType: 'cities' | 'near';
}

const listClasses = {
  cities: {
    classToList: 'cities__places-list',
  },
  near: {
    classToList: 'near-places__list',
  }
};


function OffersList({offers, listType}: OffersListProps): JSX.Element {
  const [, setCard] = useState<string | null>(null);
  const additionalClassesToList = `places__list ${listClasses[listType].classToList}`;

  return (
    <div className={additionalClassesToList}>
      {
        offers.map((item) => (
          <PlaceCard
            key={item.id}
            offer={item}
            onMouseToCard={() => {
              setCard(item.id);
              store.dispatch(updateActiveOffer(item.id));
            }}
            onMouseLeaveCard={() => {
              setCard(null);
              store.dispatch(updateActiveOffer(''));
            }}
            listType="cities"
          />)
        )
      }
    </div>
  );
}

export default OffersList;
