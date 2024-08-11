import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const/const.ts';
import Sorting, {SortValue} from '../../const/sorting-const.ts';
import {CitiesCoordinatesKeys} from '../../const/city-points.ts';
import {loadOffersAction} from './api-actions-offers.ts';
import {OfferFromList} from '../../types/offer.ts';
import {RequestStatus} from '../../types/request-status.ts';

type OffersData = {
  selectedCity: CitiesCoordinatesKeys;
  offers: OfferFromList[];
  idActiveOffer: string;
  sortingType: SortValue;
  offersStatus: RequestStatus;
}

const initialState: OffersData = {
  selectedCity: 'Paris',
  offers: [],
  idActiveOffer: '',
  sortingType: Sorting.base,
  offersStatus: RequestStatus.Idle,
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadOffersAction.pending, (state) => {
        state.offersStatus = RequestStatus.Loading;
      })
      .addCase(loadOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersStatus = RequestStatus.Success;
      })
      .addCase(loadOffersAction.rejected, (state) => {
        state.offersStatus = RequestStatus.Error;
      });
  }
});
