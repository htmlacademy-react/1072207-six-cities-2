import {CITIES} from './cities.ts';

type TabsProps = {
  onTabsItemClick: (cityItemName: string) => void;
}

// eslint-disable-next-line react/prop-types
function Tabs({onTabsItemClick}: TabsProps): JSX.Element {
  const handleTabsItemClick = (e: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>): void => {
    onTabsItemClick(e.currentTarget.innerText);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            CITIES.map((city, index) => {
              const keyValue = `${index}-${city}`;

              return (
                <li className="locations__item"
                  onClick={handleTabsItemClick}
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
