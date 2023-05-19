import { AchievementRequirement, buildingQuantity } from "./achivementsUtils";

export interface Achievement {
  id: number;
  name: string;
  description: string;
  condition: AchievementRequirement;
  isDiscovered: boolean;
}

const achievementMaker = {
  id: 1,
  make: function (
    name: string,
    description: string,
    condition: AchievementRequirement
  ): Achievement {
    return {
      name,
      description,
      condition,
      id: this.id++,
      isDiscovered: false,
    };
  },
};

export const ACHIEVEMENTS = () => [
  achievementMaker.make(
    "10 fingers",
    "Purchase 10 fingers",
    buildingQuantity(0, 10)
  ),
  achievementMaker.make(
    "50 fingers",
    "Purchase 50 fingers",
    buildingQuantity(0, 50)
  ),
  achievementMaker.make(
    "100 fingers",
    "Purchase 100 fingers",
    buildingQuantity(0, 100)
  ),
  achievementMaker.make(
    "10 palms",
    "Purchase 10 palms",
    buildingQuantity(1, 10)
  ),
  achievementMaker.make(
    "50 palms",
    "Purchase 50 palms",
    buildingQuantity(1, 50)
  ),
  achievementMaker.make(
    "100 palms",
    "Purchase 100 palms",
    buildingQuantity(1, 100)
  ),
  achievementMaker.make(
    "10 fists",
    "Purchase 10 fists",
    buildingQuantity(2, 10)
  ),
  achievementMaker.make(
    "50 fists",
    "Purchase 50 fists",
    buildingQuantity(2, 50)
  ),
  achievementMaker.make(
    "100 fists",
    "Purchase 100 fists",
    buildingQuantity(2, 100)
  ),
  achievementMaker.make(
    "10 chests",
    "Purchase 10 chests",
    buildingQuantity(3, 10)
  ),
  achievementMaker.make(
    "50 chests",
    "Purchase 50 chests",
    buildingQuantity(3, 50)
  ),
  achievementMaker.make(
    "100 chests",
    "Purchase 100 chests",
    buildingQuantity(3, 100)
  ),
  achievementMaker.make(
    "10 hammers",
    "Purchase 10 hammers",
    buildingQuantity(4, 10)
  ),
  achievementMaker.make(
    "50 hammers",
    "Purchase 50 hammers",
    buildingQuantity(4, 50)
  ),
  achievementMaker.make(
    "100 hammers",
    "Purchase 100 hammers",
    buildingQuantity(4, 100)
  ),
  achievementMaker.make("10 mass", "Purchase 10 mass", buildingQuantity(5, 10)),
  achievementMaker.make("50 mass", "Purchase 50 mass", buildingQuantity(5, 50)),
  achievementMaker.make(
    "100 mass",
    "Purchase 100 mass",
    buildingQuantity(5, 100)
  ),
];
