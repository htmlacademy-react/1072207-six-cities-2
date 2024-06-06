import {OfferFromList} from 'types/offer.ts';
import OffersList from 'components/offers-list/offers-list.tsx';
import Header from 'components/header/header.tsx';
import Map from 'components/map/map.tsx';
import Tabs from 'components/tabs/tabs.tsx';
import Sorting from 'components/sorting/sorting.tsx';
import Layout from 'components/layout/layout.tsx';
import {CitiesCoordinatesKeys} from '../../const/city-points.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {updateActiveCity} from '../../store/action.ts';
import {store} from '../../store';

function Main(): JSX.Element {
  const selectedCityStore: CitiesCoordinatesKeys = useAppSelector((state) => state.selectedCity);
  const offersStore = useAppSelector((state) => state.offers);

  const handleListItemClick = (cityItemName: CitiesCoordinatesKeys) => {
    store.dispatch(updateActiveCity(cityItemName))
  };

  const relevantOffers: OfferFromList[] = offersStore.filter((offer) => offer.city.name === selectedCityStore);
  return (
    <Layout header={<Header/>} className="page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs onTabsItemClick={handleListItemClick}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{relevantOffers.length} places to stay in {selectedCityStore}</b>
              <Sorting/>
              <OffersList offers={relevantOffers} listType="cities"/>
            </section>
            <div className="cities__right-section">
              <Map className="cities__map" offers={relevantOffers} city={selectedCityStore}/>
            </div>
          </div>
        </div>
      </main>
    </Layout>

  );
}

export default Main;
