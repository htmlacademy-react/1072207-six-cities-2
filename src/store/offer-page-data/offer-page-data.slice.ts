import {Offer, OfferFromList} from '../../types/offer.ts';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const/const.ts';
import {
  loadCommentsToOfferAction,
  loadNearbyOffersAction,
  loadOfferAction,
  sendingCommentAction
} from './api-actions-offer.ts';
import {RequestStatus} from '../../types/request-status.ts';
import {Review} from '../../types/review.ts';

type OfferPageDataSlice = {
  offer: Offer | null;
  offerStatus: RequestStatus;
  offersNearby: OfferFromList[];
  offersNearbyStatus: RequestStatus;
  offerComments: Review[];
  offerCommentsStatus: RequestStatus;
  sendingComment: Review | null;
  sendingCommentStatus: RequestStatus;
};

const initialState: OfferPageDataSlice = {
  offer: null,
  offerStatus: RequestStatus.Idle,
  offersNearby: [],
  offersNearbyStatus: RequestStatus.Idle,
  offerComments: [],
  offerCommentsStatus: RequestStatus.Idle,
  sendingComment: null,
  sendingCommentStatus: RequestStatus.Idle,
};

export const offerPageData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadOfferAction.pending, (state) => {
        state.offerStatus = RequestStatus.Loading;
      })
      .addCase(loadOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.offerStatus = RequestStatus.Success;
      })
      .addCase(loadOfferAction.rejected, (state) => {
        state.offerStatus = RequestStatus.Error;
      })
      .addCase(loadNearbyOffersAction.pending, (state) => {
        state.offersNearbyStatus = RequestStatus.Loading;
      })
      .addCase(loadNearbyOffersAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
        state.offersNearbyStatus = RequestStatus.Success;
      })
      .addCase(loadNearbyOffersAction.rejected, (state) => {
        state.offersNearbyStatus = RequestStatus.Error;
      })
      .addCase(loadCommentsToOfferAction.pending, (state) => {
        state.offerCommentsStatus = RequestStatus.Loading;
        // console.log('Загрузка comments');
      })
      .addCase(loadCommentsToOfferAction.fulfilled, (state, action) => {
        state.offerComments = action.payload;
        state.offerCommentsStatus = RequestStatus.Success;
        // console.log('comments загружены');
        // console.log(state.offersNearby);
      })
      .addCase(loadCommentsToOfferAction.rejected, (state) => {
        state.offerCommentsStatus = RequestStatus.Error;
        // console.log('Произошла ошибка при загрузке comments');
      })
      .addCase(sendingCommentAction.pending, (state) => {
        state.sendingCommentStatus = RequestStatus.Loading;
        // console.log('Отправка comment');
      })
      .addCase(sendingCommentAction.fulfilled, (state, action) => {
        state.sendingComment = action.payload;
        state.sendingCommentStatus = RequestStatus.Success;
        // console.log('comment отправлен');
        // console.log('comment ответ от сервера:');
        // console.log(state.sendingComment);
      })
      .addCase(sendingCommentAction.rejected, (state) => {
        state.sendingCommentStatus = RequestStatus.Error;
        // console.log('Произошла ошибка при отправке comment');
      });
  }
});
