import {OfferFromList} from 'types/offer.ts';
import PlaceCard from 'components/place-card/place-card.tsx';
import {useState} from 'react';
import {updateActiveOffer} from '../../store/app-state/app-state.slice.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';

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
  const dispatch = useAppDispatch();

  return (
    <div className={additionalClassesToList}>
      {
        offers.map((item) => (
          <PlaceCard
            key={item.id}
            offer={item}
            onMouseToCard={() => {
              setCard(item.id);
              dispatch(updateActiveOffer(item.id));
            }}
            onMouseLeaveCard={() => {
              setCard(null);
              dispatch(updateActiveOffer(''));
            }}
            listType="cities"
          />)
        )
      }
    </div>
  );
}

export default OffersList;
