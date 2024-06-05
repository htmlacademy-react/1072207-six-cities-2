import {createAction} from '@reduxjs/toolkit';
import {NameSpace} from '../const/const.ts';

export const fetchOffers = createAction(`${NameSpace.App}/action/fetchOffers`);
export const updateActiveCity = createAction(`${NameSpace.Offers}/action/updateActiveCity`);



// const store = useAppSelector((state) => state);
// console.log(store);
