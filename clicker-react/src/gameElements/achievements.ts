import GameState from "../Gamestate";

export interface Achievement {
  id: number;
  name: string;
  description: string;
  condition: (state: GameState) => boolean;
}

export const ACHIEVEMENTS = [
  {
    id: 1,
    name: "10 fingers",
    description: "Purchase 10 fingers",
    condition: (state: GameState) => state.buildings[0].quantity >= 10,
  },
  {
    id: 2,
    name: "50 fingers",
    description: "Purchase 50 fingers",
    condition: (state: GameState) => state.buildings[0].quantity >= 50,
  },
  {
    id: 3,
    name: "100 fingers",
    description: "Purchase 100 fingers",
    condition: (state: GameState) => state.buildings[0].quantity >= 100,
  },
  {
    id: 4,
    name: "10 palms",
    description: "Purchase 10 palms",
    condition: (state: GameState) => state.buildings[1].quantity >= 10,
  },
  {
    id: 5,
    name: "50 palms",
    description: "Purchase 50 palms",
    condition: (state: GameState) => state.buildings[1].quantity >= 50,
  },
  {
    id: 6,
    name: "100 palms",
    description: "Purchase 100 palms",
    condition: (state: GameState) => state.buildings[1].quantity >= 100,
  },
];
