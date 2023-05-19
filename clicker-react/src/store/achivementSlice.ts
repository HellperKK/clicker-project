import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ACHIEVEMENTS, Achievement } from "../gameElements/achievements";

export interface CounterState {
  achievements: Array<Achievement>;
}

const initialState: CounterState = {
  achievements: ACHIEVEMENTS,
};

export const achievementSlice = createSlice({
  name: "achievements",
  initialState,
  reducers: {
    unlockAchievement: (state, action: PayloadAction<Achievement>) => {
      const index = state.achievements.findIndex(
        (achievement) => achievement.id === action.payload.id
      );

      if (index !== undefined) {
        state.achievements[index].isDiscovered = true;
      }
    },
    setAchievements: (state, action: PayloadAction<Array<Achievement>>) => {
      state.achievements = action.payload;
    },
    resetAchievements: (state) => {
      state.achievements = ACHIEVEMENTS;
    },
  },
});

// Action creators are generated for each case reducer function
export const { unlockAchievement, setAchievements, resetAchievements } =
  achievementSlice.actions;

export default achievementSlice.reducer;
