import Logo from 'components/logo/logo.tsx';
import Header from 'components/header/header.tsx';
import Layout from 'components/layout/layout.tsx';
import FavoritesList from 'components/favorites-list/favorites-list.tsx';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {loadFavoritesOffersAction} from '../../store/favorites-process/api-actions-favorites.ts';
import {useEffect} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getFavoriteOffers, getSendingStatus} from '../../store/favorites-process/favorites-process.selectors.ts';

function Favorites(): JSX.Element {

  const dispatch = useAppDispatch();
  // dispatch(loadFavoritesOffersAction());
  const sendingFavoriteOffersStatus = useAppSelector(getSendingStatus);
  useEffect(() => {
    dispatch(loadFavoritesOffersAction());
  }, [sendingFavoriteOffersStatus]);

  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <Layout header={<Header/>}>
      <>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList offers={favoriteOffers} />
            </section>
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
