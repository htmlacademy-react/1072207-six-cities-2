import React from 'react';
import {OfferT} from '../../mocks/offers.ts';
import PlaceCard from '../place-card/place-card.tsx';
import {useState} from 'react';

type OffersListProps = {
  offers: OfferT[];
}

type Card = {
  id: string;
  content: JSX.Element;
}

function OffersList({offers}: OffersListProps): JSX.Element {
  const [activeCard, saveIdActiveCard] = useState('Пусто');

  const cardArr: Card[] = [];
  const numberCards: number = offers.length;
  function getCardsArr(number: number) {
    for (let i = 0; i < number; i++) {
      cardArr.push(
        {
          id: offers[i].id,
          content:
            <PlaceCard offer = {offers[i]}
              giveActiveCard={() => saveIdActiveCard(offers[i].id)}
            />,
        }
      );
    }
  }

  getCardsArr(numberCards);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        cardArr.map((item) => <React.Fragment key={item.id}>{item.content}</React.Fragment>)
      }
    </div>
  );
}

export default OffersList;
