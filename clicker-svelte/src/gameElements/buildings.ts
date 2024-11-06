export interface Building {
  id: number;
  quantity: number;
  name: string;
  desc: string;
  basePrice: number;
  moneyGain: number;
  isUnlocked: boolean;
}

const buildingMaker = {
  id: 1,
  make: function (
    name: string,
    desc: string,
    basePrice: number,
    moneyGain: number
  ): Building {
    return {
      name,
      desc,
      basePrice,
      moneyGain,
      id: this.id++,
      quantity: 0,
      isUnlocked: false,
    };
  },
};

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

export const BUILDINGS: () => Array<Building> = () => [
  buildingMaker.make('Finger', 'A finger to click for you.', 10, 1),
  buildingMaker.make('Palm', 'Many fingers at the same time.', 200, 5),
  buildingMaker.make('Fist', 'A stronger hand by punching.', 3000, 25),
  buildingMaker.make('Chest', 'To press with the whole body.', 50_000, 200),
  buildingMaker.make(
    'Hammer',
    'When the need for tools start to rise.',
    1_000_000,
    1000
  ),
  buildingMaker.make(
    'Mass',
    'A heavier tool for more strenght.',
    15_000_000,
    5000
  ),
];
