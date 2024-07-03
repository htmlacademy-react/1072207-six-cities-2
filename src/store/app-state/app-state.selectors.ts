import {State} from '../../types/state.ts';
import {NameSpace} from '../../const/const.ts';

export const getSelectedCity = (store: State) => store[NameSpace.App].selectedCity;
export const getIdActiveOffer = (store: State) => store[NameSpace.App].idActiveOffer;
export const getSortingType = (store: State) => store[NameSpace.App].sortingType;
