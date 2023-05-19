import { createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import {
  resetAchievements,
  setAchievements,
  unlockAchievement,
} from './achievements.actions';
import { ACHIEVEMENTS, Achievement } from '../gameElements/achievements';

export const initialState = ACHIEVEMENTS;

export const achievementsReducer = createReducer(
  initialState,
  on(setAchievements, (_state, { achievements }) => achievements),
  on(resetAchievements, (_state) => ACHIEVEMENTS),
  on(unlockAchievement, (state, { achievement }) => {
    const index = state.findIndex((b: Achievement) => b.id === achievement.id);

    return produce(state, (draft: Array<Achievement>) => {
      if (index !== undefined) {
        draft[index].isDiscovered = true;
      }
    });
  })
);
