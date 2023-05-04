import { createReducer, on } from '@ngrx/store';
import {
  setBuildings,
  resetBuildings,
  buyBuilding,
  unlockBuilding,
} from './buildings.actions';
import { produce } from 'immer';
import { BUILDINGS } from './buildings';

export const initialState = BUILDINGS;

export const buildingsReducer = createReducer(
  initialState,
  on(setBuildings, (_state, { buildings }) => buildings),
  on(resetBuildings, (_state) => BUILDINGS),
  on(buyBuilding, (state, { building }) => {
    const index = state.findIndex((b) => b.id === building.id);

    return produce(state, (draft) => {
      if (index !== undefined) {
        draft[index].quantity++;
      }
    });
  }),
  on(unlockBuilding, (state, { building }) => {
    const index = state.findIndex((b) => b.id === building.id);

    return produce(state, (draft) => {
      if (index !== undefined) {
        draft[index].isUnlocked = true;
      }
    });
  })
);
