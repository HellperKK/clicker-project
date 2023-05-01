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
    name: "Décimals",
    description: "Purchase 10 fingers",
    condition: (state: GameState) => state.buildings[0].quantity >= 10,
  },
];
