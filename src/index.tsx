import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {DataCities} from './data/data-cities.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const totalOffers = DataCities.TotalOffers;

root.render(
  <React.StrictMode>
    {/*<App totalOffers = {DataCities.TotalOffers}/>*/}
    <App totalOffers = {totalOffers}/>
  </React.StrictMode>
);
