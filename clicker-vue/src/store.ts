import { BUILDINGS, Building } from "./buildings";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useGameStore = defineStore("game", () => {
  const money = ref(0);
  const buildings = ref(BUILDINGS());

  const getMoney = computed(() => money.value);
  const getBuildings = computed(() => buildings.value);

  function resetMoney() {
    money.value = 0;
  }

  function changeMoneyByAmount(amount: number) {
    money.value += amount;
  }

  function setMoney(amount: number) {
    money.value = amount;
  }

  function buyBuilding(building: Building) {
    const index = buildings.value.findIndex((b) => b.id === building.id);

    if (index !== undefined) {
      buildings.value[index].quantity++;
    }
  }

  function resetBuildings() {
    buildings.value = BUILDINGS();
  }

  function setBuildings(newBuildings: Array<Building>) {
    buildings.value = newBuildings;
  }

  return {
    money,
    buildings,
    getMoney,
    resetMoney,
    changeMoneyByAmount,
    setMoney,
    getBuildings,
    buyBuilding,
    resetBuildings,
    setBuildings,
  };
});
