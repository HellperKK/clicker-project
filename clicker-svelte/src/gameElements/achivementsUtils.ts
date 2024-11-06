import type GameState from "../utils/Gamestate";
import { type Achievement } from "./achievements";

interface BuildingQuantity {
  type: "buildingQuantity";
  buildingId: number;
  quantity: number;
}

export function buildingQuantity(
  buildingId: number,
  quantity: number
): BuildingQuantity {
  return {
    type: "buildingQuantity",
    buildingId,
    quantity,
  };
}

export type AchievementRequirement = BuildingQuantity;

export function achivementUnlockable(
  state: GameState,
  achivement: Achievement
) {
  const requirement = achivement.condition;
  switch (requirement.type) {
    case "buildingQuantity":
      return (
        state.buildings[requirement.buildingId].quantity >= requirement.quantity
      );

    default:
      return false;
  }
}
