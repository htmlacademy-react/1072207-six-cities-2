import {createAction} from '@reduxjs/toolkit';
import {NameSpace} from '../const/const.ts';
import {OfferFromList} from '../types/offer.ts';
import {CitiesCoordinatesKeys} from '../const/city-points.ts';
import {SortValue} from '../const/sorting-const.ts';

export const updateActiveCity = createAction(`${NameSpace.App}/action/updateActiveCity`, (cityName: CitiesCoordinatesKeys) => ({
  payload: cityName,
}));

export const fetchOffers = createAction(`${NameSpace.Offers}/action/fetchOffers`, (offers: OfferFromList[]) => ({
  payload: offers,
}));

export const updateActiveOffer = createAction(`${NameSpace.Offer}/action/updateActiveOffer`, (idOffer: string) => ({
  payload: idOffer,
}));

export const updateSortingPosition = createAction(`${NameSpace.Offers}/action/updateSortingPosition`, (sortingPosition: SortValue) => ({
  payload: sortingPosition,
}));

// export const loadOffers = createAction<OfferFromList[]>(`${NameSpace.Offers}/action/updateSortingPosition`);
export const loadOffers = createAction(`${NameSpace.Offers}/action/load`, (offers: OfferFromList[]) => ({
  payload: offers,
}));
