export interface Building {
  id: number;
  name: string;
  desc: string;
  basePrice: number;
  quantity: number;
  moneyGain: number;
}

export function buildingTruePrice(building: Building) {
  return Math.ceil(building.basePrice * 1.1 ** building.quantity);
}

export function buildingsGain(buildings: Array<Building>) {
  return buildings.reduce((memo, building) => {
    return memo + building.moneyGain * building.quantity;
  }, 0);
}

export function buildingShowValue(building: Building) {
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
    id: 3,
    name: "Chest",
    desc: "Press it with your whole body.",
    basePrice: 50000,
    quantity: 0,
    moneyGain: 200,
  },
];
