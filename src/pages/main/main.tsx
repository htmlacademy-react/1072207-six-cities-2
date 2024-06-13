import Header from 'components/header/header.tsx';
import Tabs from 'components/tabs/tabs.tsx';
import Layout from 'components/layout/layout.tsx';
import ContainerOffers from '../../components/container-offers/container-offers.tsx';
import ContainerNotOffers from '../../components/container-not-offers/container-not-offers.tsx';
import useRelevantOffers from '../../hooks/use-relevant-offers.ts';

function Main(): JSX.Element {
  const relevantOffers = useRelevantOffers();

  return (
    <Layout header={<Header/>} className="page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          {(relevantOffers.length === 0) && <ContainerNotOffers/>}
          {(relevantOffers.length !== 0) && <ContainerOffers relevantOffers={relevantOffers} />}
        </div>
      </main>
    </Layout>
  );
}

export default Main;
