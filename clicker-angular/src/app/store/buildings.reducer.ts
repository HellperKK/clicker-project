import { createReducer, on } from '@ngrx/store';
import {
  setBuildings,
  resetBuildings,
  buyBuilding,
  unlockBuilding,
} from './buildings.actions';
import { produce } from 'immer';
import { BUILDINGS, Building } from '../gameElements/buildings';

export const initialState = BUILDINGS;

export const buildingsReducer = createReducer(
  initialState,
  on(setBuildings, (_state, { buildings }) => buildings),
  on(resetBuildings, (_state) => BUILDINGS),
  on(buyBuilding, (state, { building }) => {
    const index = state.findIndex((b: Building) => b.id === building.id);

    return produce(state, (draft: Array<Building>) => {
      if (index !== undefined) {
        draft[index].quantity++;
      }
    });
  }),
  on(unlockBuilding, (state, { building }) => {
    const index = state.findIndex((b: Building) => b.id === building.id);

    return produce(state, (draft: Array<Building>) => {
      if (index !== undefined) {
        draft[index].isUnlocked = true;
      }
    });
  })
);
