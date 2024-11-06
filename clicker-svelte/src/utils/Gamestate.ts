import { Achievement } from "../gameElements/achievements";
import { Building } from "../gameElements/buildings";

export default interface GameState {
  money: number;
  buildings: Array<Building>;
  achievements: Array<Achievement>;
}
