import SortingForm from '../sorting-form/sorting-form.tsx';
import OffersList from '../offers-list/offers-list.tsx';
import Map from '../map/map.tsx';
import {OfferFromList} from '../../types/offer.ts';
import {CitiesCoordinatesKeys} from '../../const/city-points.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getSelectedCity} from '../../store/app-state/app-state.selectors.ts';

type ContainerOffers = {
  relevantOffers: OfferFromList[];
}

function ContainerOffers({relevantOffers}: ContainerOffers) {
  const selectedCityStore: CitiesCoordinatesKeys = useAppSelector(getSelectedCity);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{relevantOffers.length} places to stay in {selectedCityStore}</b>
        <SortingForm/>
        <OffersList offers={relevantOffers} listType="cities"/>
      </section>
      <div className="cities__right-section">
        <Map className="cities__map" offers={relevantOffers} city={selectedCityStore}/>
      </div>
    </div>
  );
}

export default ContainerOffers;
