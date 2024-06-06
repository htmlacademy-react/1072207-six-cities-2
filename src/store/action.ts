import {createAction} from '@reduxjs/toolkit';
import {NameSpace} from '../const/const.ts';

export const updateActiveCity = createAction(`${NameSpace.App}/action/updateActiveCity`, (cityName) => {
  return {
    payload: cityName,
  }
});

export const fetchOffers = createAction(`${NameSpace.Offers}/action/fetchOffers`, (offers) => {
  return {
    payload: offers,
  }
});
