import { BUILDINGS, Building } from "../gameElements/buildings";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useBuildingsStore = defineStore("buildings", () => {
  const buildings = ref(BUILDINGS());

  const getBuildings = computed(() => buildings.value);

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

  function unlockBuilding(building: Building) {
    const index = buildings.value.findIndex((b) => b.id === building.id);

    if (index !== undefined) {
      buildings.value[index].isUnlocked = true;
    }
  }

  return {
    buildings,
    getBuildings,
    buyBuilding,
    resetBuildings,
    setBuildings,
    unlockBuilding,
  };
});
