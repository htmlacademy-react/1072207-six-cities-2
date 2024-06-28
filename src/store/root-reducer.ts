import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const/const.ts';
import {offersData} from './offers-data/offers-data.slice.ts';
import {userProcess} from './user-process/user-process.slice.ts';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
