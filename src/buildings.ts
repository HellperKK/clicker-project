export interface Building {
  id: number;
  name: string;
  desc: string;
  basePrice: number;
  quantity: number;
  moneyGain: number;
}

export function calculateBuildingPrice(building: Building) {
  return Math.ceil(building.basePrice * 1.1 ** building.quantity);
}

export function calculateBuildingReward(buildings: Array<Building>) {
  return buildings.reduce((memo, building) => {
    return memo + building.moneyGain * building.quantity;
  }, 0);
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
    moneyGain: 24,
  },
];
