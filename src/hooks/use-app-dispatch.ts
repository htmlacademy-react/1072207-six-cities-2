// Обертка над хуком юз диспатч. Тогда юз Апп Диспатч знает что находится в сторе(Его структуру)
// Если этого не делать то везде нужно будет тянуть тип AppDispatch

import {useDispatch} from 'react-redux';
import {AppDispatch} from '../types/state.ts';

export const useAppDispatch = () => useDispatch<AppDispatch>();
