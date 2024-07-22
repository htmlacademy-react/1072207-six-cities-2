import Layout from '../layout/layout.tsx';
import Header from '../header/header.tsx';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getOfferStatusMessage} from '../../store/offer-page-data/offer-page-data.selectors.ts';

function ErrorPage(): JSX.Element {
  const offerErrorMessage = useAppSelector(getOfferStatusMessage);
  return (
    <Layout header={<Header/>} className="page--gray page--main">
      <div className='container'>
        <h1 color={'red'} className='container'>Error</h1>
        <h2 color={'red'} className='container'>{offerErrorMessage}</h2>
        <p className='container'>Произошла ошибка, вернитесь на главную страницу!
        </p>
      </div>
    </Layout>
  );
}

export default ErrorPage;
