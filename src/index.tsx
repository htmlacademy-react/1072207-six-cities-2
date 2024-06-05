import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './store';
import App from './components/app/app.tsx';
import {offers} from 'mocks/offers.ts';

// import {useAppSelector} from './hooks/use-app-selector.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const citySelected = useAppSelector((state) => state.selectedCity);
// console.log(citySelected);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers}/>
    </Provider>
  </React.StrictMode>
);
