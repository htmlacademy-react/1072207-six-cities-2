import {State} from '../../types/state.ts';
import {AuthorizationStatus} from '../../const/const.ts';
import {NameSpace} from '../../const/const.ts';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (state: State): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
