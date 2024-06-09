import {useState, useRef} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {store} from '../../store';
import {fetchOffers, updateSortingPosition} from '../../store/action.ts';

function Sorting() {
  const offersStore = useAppSelector((state) => state.offers);
  const sortingPositionStore = useAppSelector((state) => state.sortingPosition);
  const refOffers = useRef(offersStore);
  const offersSave = refOffers.current;
  const offersSort = [...offersStore];

  function sortingPriceMinMax() {
    offersSort.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    });
    store.dispatch(fetchOffers(offersSort));
    store.dispatch(updateSortingPosition('Price: low to high'));
  }

  function sortingPriceMaxMin() {
    offersSort.sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      }
      if (a.price < b.price) {
        return 1;
      }
      return 0;
    });
    store.dispatch(fetchOffers(offersSort));
    store.dispatch(updateSortingPosition('Price: high to low'));
  }

  function sortingMaxRating() {
    offersSort.sort((a, b) => {
      if (a.rating > b.rating) {
        return -1;
      }
      if (a.rating < b.rating) {
        return 1;
      }
      return 0;
    });
    store.dispatch(fetchOffers(offersSort));
    store.dispatch(updateSortingPosition('Top rated first'));
  }

  function sortingBase() {
    store.dispatch(fetchOffers(offersSave));
    store.dispatch(updateSortingPosition('Popular'));
  }

  const [switcher, setSwitcher] = useState(false);

  function onSortFormClick () {
    setSwitcher(!switcher);
  }

  let classOpenForm = 'places__options places__options--custom';

  if (switcher) {
    classOpenForm = 'places__options places__options--custom places__options--opened';
  }

  return (
    <form className="places__sorting"
      action="#"
      method="get"
      onClick={() => onSortFormClick()}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>{sortingPositionStore}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={classOpenForm}>
        <li
          className="places__option places__option--active"
          tabIndex={0}
          onClick={() => sortingBase()}
        >
          Popular
        </li>
        <li className="places__option" tabIndex={0}
          onClick={() => sortingPriceMinMax()}
        >
          Price: low to high
        </li>
        <li className="places__option" tabIndex={0}
          onClick={() => sortingPriceMaxMin()}
        >
          Price: high to low
        </li>
        <li className="places__option" tabIndex={0}
          onClick={() => sortingMaxRating()}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}

export default Sorting;
