import Sorting, {SortValue} from '../../const/sorting-const.ts';
import {CitiesCoordinatesKeys} from '../../const/city-points.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const/const.ts';

type AppState = {
  selectedCity: CitiesCoordinatesKeys;
  sortingType: SortValue;
  idActiveOffer: string;
}

const initialState: AppState = {
  selectedCity: 'Paris',
  sortingType: Sorting.base,
  idActiveOffer: '',
};

export const appState = createSlice({
  name: NameSpace.App,
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
  }
});

export const {updateSortingPosition, updateActiveCity, updateActiveOffer} = appState.actions;
