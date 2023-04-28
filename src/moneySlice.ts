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
    setMoney: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    resetMoney: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeByAmount, setMoney, resetMoney } = moneySlice.actions;

export default moneySlice.reducer;
