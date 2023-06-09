import { createAction, props } from '@ngrx/store';
import { Building } from '../gameElements/buildings';

export const setBuildings = createAction(
  '[Buildings Component] SetBuildings',
  props<{ buildings: Array<Building> }>()
);
export const resetBuildings = createAction(
  '[Buildings Component] ResetBuildings'
);
export const buyBuilding = createAction(
  '[Buildings Component] BuyBuilding',
  props<{ building: Building }>()
);
export const unlockBuilding = createAction(
  '[Buildings Component] UnlockBuilding',
  props<{ building: Building }>()
);
