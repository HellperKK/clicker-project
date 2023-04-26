import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    changeByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeByAmount } = moneySlice.actions;

export default moneySlice.reducer;
