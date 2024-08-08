import {State} from '../../types/state.ts';
import {NameSpace} from '../../const/const.ts';

export const getFavoriteOffers = (state: State) => state[NameSpace.Favorites].favoritesOffers;
