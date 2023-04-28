export class Building {
  id: number;
  quantity: number;
  name: string;
  desc: string;
  basePrice: number;
  moneyGain: number;

  static idCount = 1;

  constructor(
    name: string,
    desc: string,
    basePrice: number,
    moneyGain: number
  ) {
    this.id = Building.idCount++;
    this.quantity = 0;
    this.name = name;
    this.desc = desc;
    this.basePrice = basePrice;
    this.moneyGain = moneyGain;
  }

  truePrice() {
    return Math.ceil(this.basePrice * 1.1 ** this.quantity);
  }

  showingPrice() {
    return this.basePrice * 0.5;
  }
}

export function buildingsGain(buildings: Array<Building>) {
  return buildings.reduce((memo, building) => {
    return memo + building.moneyGain * building.quantity;
  }, 0);
}

export const BUILDINGS: Array<Building> = [
  new Building("Finger", "A finger to click for you.", 10, 1),
  new Building("Palm", "Many fingers at the same time.", 200, 5),
  new Building("Fist", "A stronger hand by punching.", 3000, 25),
  new Building("Chest", "To press with the whole body.", 50_000, 200),
  new Building("Hammer", "A handy and strong tool", 1_000_000, 1000),
  new Building("Mass", "A heavier tool for more strenght.", 15_000_000, 5000),
];
