import Logo from 'components/logo/logo.tsx';
import Header from 'components/header/header.tsx';
import Layout from 'components/layout/layout.tsx';
import {OfferFromList} from 'types/offer.ts';
import FavoritesCardList from 'components/favorites-card-list/favorites-card-list.tsx';

type FavoritesProps={
  offers: OfferFromList[];
}

function Favorites({offers}: FavoritesProps): JSX.Element {
  return (
    <Layout header={<Header/>}>
      <>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Paris</span>
                      </a>
                    </div>
                  </div>
                  <FavoritesCardList offers={offers}/>
                </li>
              </ul>

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
