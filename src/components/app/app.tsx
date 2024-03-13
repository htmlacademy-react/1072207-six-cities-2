import MainPage from '../../pages/main/main.tsx';

const DataCities = {
  TotalOffers: 5
};

function App(): JSX.Element {
  return (
    <MainPage totalOffers={DataCities.TotalOffers}/>
  );
}

export default App;
