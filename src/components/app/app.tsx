import MainPage from '../../pages/main/main.tsx';

type AppTotalOffersProps = {
  totalOffers: number;
}


function App({totalOffers}: AppTotalOffersProps): JSX.Element {
  return (
    <MainPage totalOffers = {totalOffers}/>
  );
}

export default App;
