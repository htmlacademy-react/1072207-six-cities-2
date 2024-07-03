import {createAsyncThunk} from '@reduxjs/toolkit';
import {OfferFromList} from '../../types/offer.ts';
import {AppDispatch, State} from '../../types/state.ts';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../../const/const.ts';

export const loadOffersAction = createAsyncThunk<OfferFromList[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferFromList[]>(APIRoute.Offers);
    return data;
  },
);
