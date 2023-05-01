import { Building } from "./buildings";

export default interface GameState {
  money: number;
  buildings: Array<Building>;
}
