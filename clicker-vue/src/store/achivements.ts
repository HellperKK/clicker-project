import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { ACHIEVEMENTS, Achievement } from "../gameElements/achievements";

export const useAchivementsStore = defineStore("achievements", () => {
  const achievements = ref(ACHIEVEMENTS());

  const getAchivements = computed(() => achievements.value);

  function resetAchivements() {
    achievements.value = ACHIEVEMENTS();
  }

  function setAchivements(newBuildings: Array<Achievement>) {
    achievements.value = newBuildings;
  }

  function unlockAchivement(achievement: Achievement) {
    const index = achievements.value.findIndex((a) => a.id === achievement.id);

    if (index !== undefined) {
      achievements.value[index].isDiscovered = true;
    }
  }

  return {
    getAchivements,
    resetAchivements,
    setAchivements,
    unlockAchivement,
  };
});
