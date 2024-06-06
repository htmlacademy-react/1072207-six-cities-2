import {createReducer} from '@reduxjs/toolkit';
import {OfferFromList} from '../types/offer.ts';
import {updateActiveCity, fetchOffers} from './action.ts';
import {CitiesCoordinatesKeys} from '../const/city-points.ts';

type InitialState = {
  selectedCity: CitiesCoordinatesKeys;
  offers: OfferFromList[] | [];
}

const initialState:InitialState = {
  selectedCity: 'Paris',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(updateActiveCity, (state, action) => {
      state.selectedCity = action.payload;
    });
});

export {reducer};































