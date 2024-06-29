import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const/const.ts';
import {OffersData} from '../../types/state.ts';
import sorting, {SortValue} from '../../const/sorting-const.ts';
import {CitiesCoordinatesKeys} from '../../const/city-points.ts';
import {loadOffersAction} from '../api-actions.ts';

const initialState: OffersData = {
  selectedCity: 'Paris',
  offers: [],
  idActiveOffer: '',
  sortingType: sorting.base,
  isOffersLoading: false,
  hasError: false,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    updateSortingPosition: (state, action: PayloadAction<SortValue>) => {
      state.sortingType = action.payload;
    },
    updateActiveCity: (state, action: PayloadAction<CitiesCoordinatesKeys>) => {
      state.selectedCity = action.payload;
    },
    updateActiveOffer: (state, action: PayloadAction<string>) => {
      state.idActiveOffer = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadOffersAction.pending, (state) => {
        state.isOffersLoading = true;
        state.hasError = false;
      })
      .addCase(loadOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(loadOffersAction.rejected, (state) => {
        state.isOffersLoading = false;
        state.hasError = true;
      });
  }
});

export const {updateSortingPosition, updateActiveCity, updateActiveOffer} = offersData.actions;
