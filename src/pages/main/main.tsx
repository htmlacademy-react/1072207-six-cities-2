import Header from 'components/header/header.tsx';
import Tabs from 'components/tabs/tabs.tsx';
import Layout from 'components/layout/layout.tsx';
import ContainerOffers from '../../components/container-offers/container-offers.tsx';
import ContainerNotOffers from '../../components/container-not-offers/container-not-offers.tsx';
import useRelevantOffers from '../../hooks/use-relevant-offers.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import LoadingMessage from '../../components/alerts/loading-message.tsx';
import {getStatus} from '../../store/offers-data/offers-data.selectors.ts';
import ErrorMessage from '../../components/alerts/error-message.tsx';
import {RequestStatus} from '../../types/request-status.ts';
import {ErrorBoundary} from 'react-error-boundary';
function Main(): JSX.Element {
  const relevantOffers = useRelevantOffers();
  const offersStatus = useAppSelector(getStatus);

  if (offersStatus === RequestStatus.Loading) {
    return (
      <LoadingMessage />
    );
  }

  if (offersStatus === RequestStatus.Error) {
    return (
      <ErrorMessage />
    );
  }

  return (
    <Layout header={<Header/>} className="page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <ErrorBoundary fallback={<div color={'red'} className='container'>Something went wrong to offers on this page</div>}>
          <div className="cities">
            {(relevantOffers.length === 0) && <ContainerNotOffers/>}
            {(relevantOffers.length !== 0) && <ContainerOffers relevantOffers={relevantOffers}/>}
          </div>
        </ErrorBoundary>

      </main>
    </Layout>
  );
}

export default Main;
