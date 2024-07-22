import {State} from '../../types/state.ts';
import {AuthorizationStatus, NameSpace} from '../../const/const.ts';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getIsAuth = (state: State): boolean => state[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth;
export const getUserEmail = (state: State) => state[NameSpace.User].email;
// export const getAuthCheckedStatus = (state: State): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;

