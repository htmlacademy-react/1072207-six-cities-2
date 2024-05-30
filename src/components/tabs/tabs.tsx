import {CITIES__COORDINATES, CitiesCoordinatesKeys} from '../../const/city-points.ts';

type TabsProps = {
  onTabsItemClick: (cityItemName: CitiesCoordinatesKeys) => void;
}

function Tabs({onTabsItemClick}: TabsProps): JSX.Element {
  const handleTabsItemClick = (city: CitiesCoordinatesKeys): void => {
    onTabsItemClick(city);
  };

  const cities = Object.keys(CITIES__COORDINATES) as CitiesCoordinatesKeys[];

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city, index) => {
              const keyValue = `${index}-${city}`;

              return (
                <li className="locations__item"
                  onClick={() => handleTabsItemClick(city)}
                  key={keyValue}
                >
                  <a className="locations__item-link tabs__item" href="#">
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
