import { Building } from "./gameElements/buildings";

export default interface GameState {
  money: number;
  buildings: Array<Building>;
}
