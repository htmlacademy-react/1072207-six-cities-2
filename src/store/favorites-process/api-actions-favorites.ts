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

export const sendingFavoritesStatusAction = createAsyncThunk<void, TExportStatus, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendingFavoritesStatusAction',
  async ({offerId, status}, {extra: api}) => {
    // const response = await api.post<AxiosResponse>(`${APIRoute.Favorite}/${offerId}/${status}`);
    await api.post(`${APIRoute.Favorite}/${offerId}/${status}`);
    // console.log(response);
    // return response;
  },
);
