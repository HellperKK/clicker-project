import { createAction, props } from '@ngrx/store';
import { Achievement } from '../gameElements/achievements';

export const setAchievements = createAction(
  '[Achievements Component] SetAchievements',
  props<{ achievements: Array<Achievement> }>()
);
export const resetAchievements = createAction(
  '[Achievements Component] ResetAchievements'
);
export const unlockAchievement = createAction(
  '[Achievements Component] UnlockAchievement',
  props<{ achievement: Achievement }>()
);
