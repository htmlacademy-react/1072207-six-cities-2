//
// Создайте новый файл для описания редьюсера (например, reducer.ts).
//   Опишите в нём:
//
//   Объект начального состояния: город
//   (используется для отбора списка предложений в определённом городе)
//   и список предложений по аренде.
//
//   Функцию-редьюсер. Она принимает в качестве параметров текущий state и действие (action).
//   Результатом выполнения редьюсера станет новое состояние.
//   Обратите внимание, для именования функций-редьюсеров применяются существительные.

import {createReducer} from '@reduxjs/toolkit';
import {offers} from '../mocks/offers.ts';
import {OfferFromList} from '../types/offer.ts';
import {updateActiveCity, fetchOffers} from './action.ts';

type InitialState = {
  selectedCity: string;
  offers: OfferFromList[] | null;
}

const initialState:InitialState = {
  selectedCity: 'Paris',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = offers;
      // console.log(state);
    })
    .addCase(updateActiveCity, (state) => {
      state.selectedCity = state.offers[0].city.name;
    });
});

export {reducer};































