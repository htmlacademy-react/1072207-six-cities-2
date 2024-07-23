import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const/const.ts';
import {offersData} from './offers-data/offers-data.slice.ts';
import {userProcess} from './user-process/user-process.slice.ts';
import {appState} from './app-state/app-state.slice.ts';
import {offerPageData} from './offer-page-data/offer-page-data.slice.ts';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.App]: appState.reducer,
  [NameSpace.Offer]: offerPageData.reducer,
});
