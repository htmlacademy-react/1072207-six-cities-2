import {OfferFromList} from 'types/offer.ts';
import Header from 'components/header/header.tsx';
import Tabs from 'components/tabs/tabs.tsx';
import Layout from 'components/layout/layout.tsx';
import {CitiesCoordinatesKeys} from '../../const/city-points.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {updateActiveCity} from '../../store/action.ts';
import {store} from '../../store';
import ContainerOffers from '../../components/container-offers/container-offers.tsx';
import ContainerNotOffers from '../../components/container-not-offers/container-not-offers.tsx';

function Main(): JSX.Element {
  const selectedCityStore: CitiesCoordinatesKeys = useAppSelector((state) => state.selectedCity);
  const offersStore = useAppSelector((state) => state.offers);

  const handleListItemClick = (cityItemName: CitiesCoordinatesKeys) => {
    store.dispatch(updateActiveCity(cityItemName));
  };

  const relevantOffers: OfferFromList[] = offersStore.filter((offer) => offer.city.name === selectedCityStore);

  return (
    <Layout header={<Header/>} className="page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs onTabsItemClick={handleListItemClick}/>
        <div className="cities">
          {(relevantOffers.length === 0) && <ContainerNotOffers/>}
          {(relevantOffers.length !== 0) && <ContainerOffers relevantOffers={relevantOffers} />}
        </div>
      </main>
    </Layout>

  );
}

export default Main;
