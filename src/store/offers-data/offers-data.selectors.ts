import {State} from '../../types/state.ts';
import {NameSpace} from '../../const/const.ts';

export const getSelectedCity = (store: State) => store[NameSpace.Offers].selectedCity;
export const getOffers = (store: State) => store[NameSpace.Offers].offers;
export const getIdActiveOffer = (store: State) => store[NameSpace.Offers].idActiveOffer;
export const getSortingType = (store: State) => store[NameSpace.Offers].sortingType;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Offers].hasError;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersLoading;
