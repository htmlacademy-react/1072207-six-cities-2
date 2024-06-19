import {AppDispatch, State} from '../types/state.ts';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {OfferFromList} from '../types/offer.ts';
import {APIRoute} from '../const/const.ts';
import {loadOffers} from './action.ts';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferFromList[]>(APIRoute.Offers);
    dispatch(loadOffers(data));
  },
);
