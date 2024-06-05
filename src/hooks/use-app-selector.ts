// Обертка для того что бы при обращении к хранилищу useSelector уже знал о его структуре.
// Он будет использован как функция которая будет возвращать результат из хранилища.
// Для этого в него будет передана функция селектора выглядит как
// const offers = useAppSelector((state) => state.offers); Вернет оферы
//


import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {State} from '../types/state.ts';

export const useAppSelector: TypedUseSelectorHook<State> = () => useSelector;
