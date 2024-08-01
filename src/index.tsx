import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import App from './app/app.tsx';
import {checkAuthAction} from './store/user-process/api-actions-user.ts';
import {loadOffersAction} from './store/offers-data/api-actions-offers.ts';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {loadFavoritesOffersAction} from './store/favorites-process/api-actions-favorites.ts';

store.dispatch(loadOffersAction());
store.dispatch(checkAuthAction());
store.dispatch(loadFavoritesOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
