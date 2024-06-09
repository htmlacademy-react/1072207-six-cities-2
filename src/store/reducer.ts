import {createReducer} from '@reduxjs/toolkit';
import {OfferFromList} from '../types/offer.ts';
import {updateActiveCity, fetchOffers, updateActiveOffer, updateSortingPosition} from './action.ts';
import {CitiesCoordinatesKeys} from '../const/city-points.ts';

type InitialState = {
  selectedCity: CitiesCoordinatesKeys;
  offers: OfferFromList[] | [];
  idActiveOffer: string;
  sortingPosition: string;
}

const initialState:InitialState = {
  selectedCity: 'Paris',
  offers: [],
  idActiveOffer: '',
  sortingPosition: 'Popular',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(updateActiveCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(updateActiveOffer, (state, action) => {
      state.idActiveOffer = action.payload;
    })
    .addCase(updateSortingPosition, (state, action) => {
      state.sortingPosition = action.payload;
    });

});

export {reducer};
