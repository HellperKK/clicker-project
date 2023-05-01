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
  achievementMaker.make(
    "10 fists",
    "Purchase 10 fists",
    (state: GameState) => state.buildings[2].quantity >= 10
  ),
  achievementMaker.make(
    "50 fists",
    "Purchase 50 fists",
    (state: GameState) => state.buildings[2].quantity >= 50
  ),
  achievementMaker.make(
    "100 fists",
    "Purchase 100 fists",
    (state: GameState) => state.buildings[2].quantity >= 100
  ),
  achievementMaker.make(
    "10 chests",
    "Purchase 10 chests",
    (state: GameState) => state.buildings[3].quantity >= 10
  ),
  achievementMaker.make(
    "50 chests",
    "Purchase 50 chests",
    (state: GameState) => state.buildings[3].quantity >= 50
  ),
  achievementMaker.make(
    "100 chests",
    "Purchase 100 chests",
    (state: GameState) => state.buildings[3].quantity >= 100
  ),
  achievementMaker.make(
    "10 hammers",
    "Purchase 10 hammers",
    (state: GameState) => state.buildings[4].quantity >= 10
  ),
  achievementMaker.make(
    "50 hammers",
    "Purchase 50 hammers",
    (state: GameState) => state.buildings[4].quantity >= 50
  ),
  achievementMaker.make(
    "100 hammers",
    "Purchase 100 hammers",
    (state: GameState) => state.buildings[4].quantity >= 100
  ),
  achievementMaker.make(
    "10 mass",
    "Purchase 10 mass",
    (state: GameState) => state.buildings[5].quantity >= 10
  ),
  achievementMaker.make(
    "50 mass",
    "Purchase 50 mass",
    (state: GameState) => state.buildings[5].quantity >= 50
  ),
  achievementMaker.make(
    "100 mass",
    "Purchase 100 mass",
    (state: GameState) => state.buildings[5].quantity >= 100
  ),
];
