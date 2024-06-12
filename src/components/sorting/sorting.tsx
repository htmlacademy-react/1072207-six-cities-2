import {useState, useRef} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import useOnClickOutside from '../../hooks/use-on-click-outside.ts';
import sortingKey from '../../const/sorting-const.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {updateSortingPosition} from '../../store/action.ts';
import cn from 'classnames';

function Sorting() {
  const sortingPositionStore = useAppSelector((state) => state.sortingPosition);

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
  const updaterSortingPosition = (keyPosition: string) => {
    dispatch(updateSortingPosition(keyPosition));
  };

  return (
    <form ref={formRef} className="places__sorting"
      action="#"
      method="get"
      onClick={() => onSortFormClick()}
    >
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>{sortingPositionStore}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={classOpenForm}>
        {
          Object.values(sortingKey).map((value) => (
            <li
              key={value}
              className={cn('places__option',
                {['places__option--active']: value === sortingPositionStore}
              )}
              tabIndex={0}
              onClick={() => updaterSortingPosition(value)}
            >
              {value}
            </li>
          ))
        }

        {/*<li*/}
        {/*  className="places__option places__option--active"*/}
        {/*  tabIndex={0}*/}
        {/*  onClick={() => updaterSortingPosition(sortingKey.base)}*/}
        {/*>*/}
        {/*  Popular*/}
        {/*</li>*/}
        {/*<li className="places__option" tabIndex={0}*/}
        {/*  onClick={() => updaterSortingPosition(sortingKey.increase)}*/}
        {/*>*/}
        {/*  Price: low to high*/}
        {/*</li>*/}
        {/*<li className="places__option" tabIndex={0}*/}
        {/*  onClick={() => updaterSortingPosition(sortingKey.decrease)}*/}
        {/*>*/}
        {/*  Price: high to low*/}
        {/*</li>*/}
        {/*<li className="places__option" tabIndex={0}*/}
        {/*  onClick={() => updaterSortingPosition(sortingKey.rating)}*/}
        {/*>*/}
        {/*  Top rated first*/}
        {/*</li>*/}
      </ul>
    </form>
  );
}

export default Sorting;
