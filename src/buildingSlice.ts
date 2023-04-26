import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BUILDINGS, Building } from "./buildings";

export interface BuildingsState {
  buildings: Array<Building>;
}

const initialState: BuildingsState = {
  buildings: BUILDINGS,
};

export const buildingsSlice = createSlice({
  name: "buildings",
  initialState,
  reducers: {
    buyBuilding: (state, action: PayloadAction<Building>) => {
      const index = state.buildings.findIndex(
        (building) => building.id === action.payload.id
      );

      if (index !== undefined) {
        state.buildings[index].quantity++;
      }
    },
    sellBuilding: (state, action: PayloadAction<Building>) => {
      const index = state.buildings.findIndex(
        (building) => building.id === action.payload.id
      );

      if (index !== undefined) {
        state.buildings[index].quantity--;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { buyBuilding, sellBuilding } = buildingsSlice.actions;

export default buildingsSlice.reducer;
