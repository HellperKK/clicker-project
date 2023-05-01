import GameState from "../Gamestate";

export interface Achievement {
  id: number;
  name: string;
  description: string;
  condition: (state: GameState) => boolean;
}

const achievementMaker = {
  id: 1,
  make: function (
    name: string,
    description: string,
    condition: (state: GameState) => boolean
  ): Achievement {
    return {
      name,
      description,
      condition,
      id: this.id++,
    };
  },
};

export const ACHIEVEMENTS = [
  achievementMaker.make(
    "10 fingers",
    "Purchase 10 fingers",
    (state: GameState) => state.buildings[0].quantity >= 10
  ),
  achievementMaker.make(
    "50 fingers",
    "Purchase 50 fingers",
    (state: GameState) => state.buildings[0].quantity >= 50
  ),
  achievementMaker.make(
    "100 fingers",
    "Purchase 100 fingers",
    (state: GameState) => state.buildings[0].quantity >= 100
  ),
  achievementMaker.make(
    "10 palms",
    "Purchase 10 palms",
    (state: GameState) => state.buildings[1].quantity >= 10
  ),
  achievementMaker.make(
    "50 palms",
    "Purchase 50 palms",
    (state: GameState) => state.buildings[1].quantity >= 50
  ),
  achievementMaker.make(
    "100 palms",
    "Purchase 100 palms",
    (state: GameState) => state.buildings[1].quantity >= 100
  ),
];
