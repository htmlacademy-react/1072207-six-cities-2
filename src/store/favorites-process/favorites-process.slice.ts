import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const/const.ts';
import {loadFavoritesOffersAction, sendingFavoritesStatusAction} from './api-actions-favorites.ts';
import {OfferFromList} from '../../types/offer.ts';
import {RequestStatus} from '../../types/request-status.ts';

type FavoritesProcess = {
  favoriteOffersLoadStatus: RequestStatus;
  favoritesSendingStatus: RequestStatus;
  favoritesOffers: OfferFromList[];
  favoritesSandingOffer: OfferFromList | null;
};

const initialState: FavoritesProcess = {
  favoriteOffersLoadStatus: RequestStatus.Idle,
  favoritesSendingStatus: RequestStatus.Idle,
  favoritesOffers: [],
  favoritesSandingOffer: null,
};

export const FavoritesProcess = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadFavoritesOffersAction.pending, (state) => {
        state.favoriteOffersLoadStatus = RequestStatus.Loading;
      })
      .addCase(loadFavoritesOffersAction.fulfilled, (state, action) => {
        state.favoriteOffersLoadStatus = RequestStatus.Success;
        state.favoritesOffers = action.payload;
      })
      .addCase(loadFavoritesOffersAction.rejected, (state) => {
        state.favoriteOffersLoadStatus = RequestStatus.Error;
      })
      .addCase(sendingFavoritesStatusAction.pending, (state) => {
        state.favoritesSendingStatus = RequestStatus.Loading;
      })
      .addCase(sendingFavoritesStatusAction.fulfilled, (state, action) => {
        state.favoritesSendingStatus = RequestStatus.Success;
        state.favoritesSandingOffer = action.payload;

        if (state.favoritesSandingOffer.isFavorite) {
          state.favoritesOffers.push(state.favoritesSandingOffer);
        }

        if (!state.favoritesSandingOffer.isFavorite) {
          const id = action.payload.id;
          state.favoritesOffers = state.favoritesOffers.filter((offer)=>offer.id !== id);
        }
      })
      .addCase(sendingFavoritesStatusAction.rejected, (state) => {
        state.favoritesSendingStatus = RequestStatus.Error;
      });
  }
});
