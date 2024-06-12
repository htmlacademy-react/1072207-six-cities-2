import {CITIES__COORDINATES, CitiesCoordinatesKeys} from '../../const/city-points.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import cn from 'classnames';

type TabsProps = {
  onTabsItemClick: (cityItemName: CitiesCoordinatesKeys) => void;
}

function Tabs({onTabsItemClick}: TabsProps): JSX.Element {
  const handleTabsItemClick = (city: CitiesCoordinatesKeys): void => {
    onTabsItemClick(city);
  };
  const selectedCityStore: CitiesCoordinatesKeys = useAppSelector((state) => state.selectedCity);
  const cities = Object.keys(CITIES__COORDINATES) as CitiesCoordinatesKeys[];

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city, index) => {
              const keyValue = `${index}-${city}`;
              const additionalClass = cn(
                'locations__item-link tabs__item',
                {['tabs__item--active']: selectedCityStore === city}
              );

              return (
                <li className="locations__item"
                  onClick={() => handleTabsItemClick(city)}
                  key={keyValue}
                >
                  <a className={additionalClass}
                    href="#"
                  >
                    <span>{city}</span>
                  </a>
                </li>
              );
            })
          }
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
