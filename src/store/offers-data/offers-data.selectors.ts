import {State} from '../../types/state.ts';
import {NameSpace} from '../../const/const.ts';

export const getOffers = (store: State) => store[NameSpace.Offers].offers;
export const getStatus = (state: State) => state[NameSpace.Offers].offersStatus;
