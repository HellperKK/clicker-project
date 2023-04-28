export interface Building {
  id: number;
  quantity: number;
  name: string;
  desc: string;
  basePrice: number;
  moneyGain: number;
}

export function buildingsGain(buildings: Array<Building>) {
  return buildings.reduce((memo, building) => {
    return memo + building.moneyGain * building.quantity;
  }, 0);
}

export function buildingTruePrice(building: Building) {
  return Math.ceil(building.basePrice * 1.1 ** building.quantity);
}

export function buildingShowingValue(building: Building) {
  return building.basePrice * 0.5;
}

export const BUILDINGS: Array<Building> = [
  {
    id: 1,
    name: "Finger",
    desc: "A finger to click for you.",
    basePrice: 10,
    quantity: 0,
    moneyGain: 1,
  },
  {
    id: 2,
    name: "Palm",
    desc: "Many fingers at the same time.",
    basePrice: 200,
    quantity: 0,
    moneyGain: 5,
  },
  {
    id: 3,
    name: "Fist",
    desc: "A stronger hand by punching.",
    basePrice: 3000,
    quantity: 0,
    moneyGain: 25,
  },
  {
    id: 4,
    name: "Chest",
    desc: "To press with the whole body.",
    basePrice: 50_000,
    quantity: 0,
    moneyGain: 200,
  },
  {
    id: 5,
    name: "Hammer",
    desc: "When the need for tools start to rise.",
    basePrice: 1_000_000,
    quantity: 0,
    moneyGain: 1000,
  },
  {
    id: 6,
    name: "Mass",
    desc: "A heavier tool for more strenght.",
    basePrice: 15_000_000,
    quantity: 0,
    moneyGain: 5000,
  },
];
