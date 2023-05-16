import { createAction, props } from '@ngrx/store';

export const setMoney = createAction(
  '[Money Component] SetMoney',
  props<{ amount: number }>()
);
export const resetMoney = createAction('[Money Component] ResetMoney');
export const changeMoneyByAmount = createAction(
  '[Money Component] ChangeMoneyByAmount',
  props<{ amount: number }>()
);
