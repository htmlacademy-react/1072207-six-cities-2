import {store} from '../store';
import {AuthorizationStatus} from '../const/const.ts';
// import {UserData} from './user-data.ts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  email: string;
  // data: UserData;
};
