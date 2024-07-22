import {createAsyncThunk} from '@reduxjs/toolkit';
import {Offer, OfferFromList} from '../../types/offer.ts';
import {AppDispatch, State, ThunkOptions} from '../../types/state.ts';
import {APIRoute} from '../../const/const.ts';
import {Review} from '../../types/review.ts';
import {AxiosInstance} from 'axios';

type TExportComment = {
  id: string;
  comment: string;
  rating: number;
}

export const loadOfferAction = createAsyncThunk<Offer, string, ThunkOptions>(
  'data/loadOffer',
  async (id, {extra: api}) => {
    const respons = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
    return respons.data;
  },
);

export const loadNearbyOffersAction = createAsyncThunk<OfferFromList[], string, ThunkOptions>(
  'data/loadNearbyOffersAction',
  async (id, {extra: api}) => {
    const {data} = await api.get<OfferFromList[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  },
);

export const loadCommentsToOfferAction = createAsyncThunk<Review[], string, ThunkOptions>(
  'data/loadCommentsToOfferAction',
  async (id, {extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export const sendingCommentAction = createAsyncThunk<Review, TExportComment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendingCommentAction',
  async ({id, comment, rating}, {extra: api, dispatch}) => {
    const sendComment = {
      'comment': comment,
      'rating': rating
    };
    const {data} = await api.post<Review>(`${APIRoute.Comments}/${id}`, sendComment);
    dispatch(loadCommentsToOfferAction(id));
    return data;
  },
);
