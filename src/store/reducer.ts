// import {createReducer} from '@reduxjs/toolkit';
// import {OfferFromList} from '../types/offer.ts';
// import {updateActiveCity, fetchOffers, updateActiveOffer, updateSortingPosition, loadOffers} from './action.ts';
// import {CitiesCoordinatesKeys} from '../const/city-points.ts';
// import sorting, {SortValue} from '../const/sorting-const.ts';
//
// export type InitialState = {
//   selectedCity: CitiesCoordinatesKeys;
//   offers: OfferFromList[];
//   idActiveOffer: string;
//   sortingType: SortValue;
// }
//
// export const initialState:InitialState = {
//   selectedCity: 'Paris',
//   offers: [],
//   idActiveOffer: '',
//   sortingType: sorting.base,
// };
//
// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(fetchOffers, (state, action) => {
//       state.offers = action.payload;
//     })
//     .addCase(updateActiveCity, (state, action) => {
//       state.selectedCity = action.payload;
//     })
//     .addCase(updateActiveOffer, (state, action) => {
//       state.idActiveOffer = action.payload;
//     })
//     .addCase(updateSortingPosition, (state, action) => {
//       state.sortingType = action.payload;
//     })
//     .addCase(loadOffers, (state, action) => {
//       state.offers = action.payload;
//     });
//
// });
//
// export {reducer};
