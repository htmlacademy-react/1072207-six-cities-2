import {store} from '../store';
import {OfferFromList} from './offer.ts';
import {CitiesCoordinatesKeys} from '../const/city-points.ts';
import {SortValue} from '../const/sorting-const.ts';
import {AuthorizationStatus} from '../const/const.ts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type OffersData = {
  selectedCity: CitiesCoordinatesKeys;
  offers: OfferFromList[];
  idActiveOffer: string;
  sortingType: SortValue;
  isOffersLoading: boolean;
  hasError: boolean;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};
