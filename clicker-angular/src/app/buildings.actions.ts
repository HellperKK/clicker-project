import { createAction, props } from '@ngrx/store';
import { Building } from './buildings';

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
