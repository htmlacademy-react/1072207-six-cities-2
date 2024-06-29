import {useState, useRef} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import useOnClickOutside from '../../hooks/use-on-click-outside.ts';
import sorting, {SortValue} from '../../const/sorting-const.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {updateSortingPosition} from '../../store/offers-data/offers-data.slice.ts';


import cn from 'classnames';
import {getSortingType} from '../../store/offers-data/offers-data.selectors.ts';

function Sorting() {
  const sortingPosition = useAppSelector(getSortingType);

  const [switcher, setSwitcher] = useState(false);
  function onSortFormClick () {
    setSwitcher(!switcher);
  }

  const formRef = useRef(null);
  useOnClickOutside(formRef, () => setSwitcher(false));

  const classOpenForm = cn(
    'places__options places__options--custom',
    {['places__options--opened']: switcher}
  );

  const dispatch = useAppDispatch();
  const handlerSortingPosition = (keyType: SortValue) => {
    dispatch(updateSortingPosition(keyType));
  };

  return (
    <form ref={formRef} className="places__sorting"
      action="#"
      method="get"
      onClick={() => onSortFormClick()}
    >
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>{sortingPosition}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={classOpenForm}>
        {
          Object.values(sorting).map((value) => (
            <li
              key={value}
              className={cn('places__option',
                {['places__option--active']: value === sortingPosition}
              )}
              tabIndex={0}
              onClick={() => handlerSortingPosition(value)}
            >
              {value}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default Sorting;
