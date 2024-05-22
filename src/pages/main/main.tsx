import {OfferFromList} from 'types/offer.ts';
import OffersList from 'components/offers-list/offers-list.tsx';
import Header from 'components/header/header.tsx';
import Map from 'components/map/map.tsx';
import Tabs from 'components/tabs/tabs.tsx';
import Sorting from 'components/sorting/sorting.tsx';
import Layout from 'components/layout/layout.tsx';
import {useEffect, useState} from 'react';
import {getOffersRelevantCity} from './utils.ts';

type MainProps={
  offers: OfferFromList[];
}

function Main({offers}: MainProps): JSX.Element {
  const [selectedCity, setSelectedCity] = useState<string | null>('Paris');
  const handleListItemClick = (cityItemName: string) => {
    setSelectedCity(cityItemName);
  };

  const relevantOffers: OfferFromList[] = getOffersRelevantCity(offers, selectedCity);

  return (
    <Layout header={<Header/>} className="page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs onTabsItemClick={handleListItemClick}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <Sorting/>
              <OffersList offers={relevantOffers}/>
            </section>
            <div className="cities__right-section">
              <Map className="cities__map" offers={relevantOffers} city={selectedCity}/>
            </div>
          </div>
        </div>
      </main>
    </Layout>

  );
}

export default Main;
