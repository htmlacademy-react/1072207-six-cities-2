import {State} from '../../types/state.ts';
import {NameSpace} from '../../const/const.ts';
import {createSelector} from '@reduxjs/toolkit';
import {RequestStatus} from '../../types/request-status.ts';

export const getOffer = (store: State) => store[NameSpace.Offer].offer;
export const getStatusOffer = (state: State) => state[NameSpace.Offer].offerStatus;
export const getNearbyOffers = (state: State) => state[NameSpace.Offer].offersNearby;
export const getCommentsOffer = (state: State) => state[NameSpace.Offer].offerComments;
export const getStatusSendingComment = (state: State) => state[NameSpace.Offer].sendingCommentStatus;
export const getOfferStatusMessage = (state: State) => state[NameSpace.Offer].offerStatusMessage;

export const selectOfferStatus = createSelector([getStatusOffer], (status) => ({
  isLoading: status === RequestStatus.Loading || status === RequestStatus.Idle,
  isError: status === RequestStatus.Error,
}));
