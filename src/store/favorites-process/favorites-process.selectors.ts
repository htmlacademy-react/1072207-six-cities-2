import {State} from '../../types/state.ts';
import {NameSpace} from '../../const/const.ts';
import {RequestStatus} from '../../types/request-status.ts';

export const getFavoriteOffers = (state: State) => state[NameSpace.Favorites].favoritesOffers;
export const getSendingStatus = (state: State): RequestStatus => state[NameSpace.Favorites].favoritesSendingStatus;
export const getFavoriteOffersLoadStatus = (state: State): RequestStatus => state[NameSpace.Favorites].favoriteOffersLoadStatus;
