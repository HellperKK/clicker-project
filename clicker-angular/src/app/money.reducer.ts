import { createReducer, on } from '@ngrx/store';
import { setMoney, resetMoney, changeMoneyByAmount } from './money.actions';

export const initialState = 0;

export const moneyReducer = createReducer(
  initialState,
  on(setMoney, (_state, { amount }) => amount),
  on(resetMoney, (_state) => 0),
  on(changeMoneyByAmount, (state, { amount }) => state + amount)
);
