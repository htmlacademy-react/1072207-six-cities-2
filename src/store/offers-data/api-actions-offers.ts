import {createAsyncThunk} from '@reduxjs/toolkit';
import {OfferFromList} from '../../types/offer.ts';
import {ThunkOptions} from '../../types/state.ts';
import {APIRoute} from '../../const/const.ts';

export const loadOffersAction = createAsyncThunk<OfferFromList[], undefined, ThunkOptions>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferFromList[]>(APIRoute.Offers);
    return data;
  },
);
