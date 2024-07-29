import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const/const.ts';
import {loadFavoritesOffersAction, sendingFavoritesStatusAction} from './api-actions-favorites.ts';
import {OfferFromList} from '../../types/offer.ts';
import {RequestStatus} from '../../types/request-status.ts';
// import {AxiosResponse} from 'axios';

type FavoritesProcess = {
  favoriteOffersLoadStatus: RequestStatus;
  favoritesSendingStatus: RequestStatus;
  favoritesOffers: OfferFromList[];
  // favoritesSandingResponse: AxiosResponse | null;
};

const initialState: FavoritesProcess = {
  favoriteOffersLoadStatus: RequestStatus.Idle,
  favoritesSendingStatus: RequestStatus.Idle,
  favoritesOffers: [],
  // favoritesSandingResponse: null,
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
        // console.log(state.favoritesOffers);
      })
      .addCase(loadFavoritesOffersAction.rejected, (state) => {
        state.favoriteOffersLoadStatus = RequestStatus.Error;
      })
      .addCase(sendingFavoritesStatusAction.pending, (state) => {
        state.favoritesSendingStatus = RequestStatus.Loading;
      })
      .addCase(sendingFavoritesStatusAction.fulfilled, (state) => {
        state.favoritesSendingStatus = RequestStatus.Success;
        // state.favoritesSandingResponse = action.payload;
      })
      .addCase(sendingFavoritesStatusAction.rejected, (state) => {
        state.favoritesSendingStatus = RequestStatus.Error;
      });
  }
});
