import Logo from 'components/logo/logo.tsx';
import Header from 'components/header/header.tsx';
import Layout from 'components/layout/layout.tsx';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getFavoriteOffers} from '../../store/favorites-process/favorites-process.selectors.ts';
import FavoritesSection from '../../components/favorites-section/favorites-section.tsx';
import FavoritesEmptySection from '../../components/favorites-empty-section/favorites-empty-section.tsx';
import cn from 'classnames';

function Favorites(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  const additionalClass = cn(
    'page__main page__main--favorites',
    {['page__main--favorites-empty']: favoriteOffers.length === 0}
  );

  return (
    <Layout header={<Header/>}>
      <>
        <main className={additionalClass}>
          <div className="page__favorites-container container">
            {favoriteOffers.length > 0 ? <FavoritesSection /> : <FavoritesEmptySection />}
          </div>
        </main>
        <footer className="footer container">
          <Logo blockName="footer" active={false}/>
        </footer>
      </>
    </Layout>
  );
}

export default Favorites;
