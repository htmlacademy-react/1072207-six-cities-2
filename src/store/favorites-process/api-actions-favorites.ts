import {createAsyncThunk} from '@reduxjs/toolkit';
import {OfferFromList} from '../../types/offer.ts';
import {AppDispatch, State, ThunkOptions} from '../../types/state.ts';
import {APIRoute} from '../../const/const.ts';
import {AxiosInstance} from 'axios';

type TExportStatus = {
  offerId: string;
  status: number;
}

export const loadFavoritesOffersAction = createAsyncThunk<OfferFromList[], undefined, ThunkOptions>(
  'data/loadFavoritesOffersAction',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferFromList[]>(APIRoute.Favorite);
    return data;
  },
);

export const sendingFavoritesStatusAction = createAsyncThunk<OfferFromList, TExportStatus, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendingFavoritesStatusAction',
  async ({offerId, status}, {extra: api}) => {
    const {data} = await api.post<OfferFromList>(`${APIRoute.Favorite}/${offerId}/${status}`);
    return data;
  },
);
