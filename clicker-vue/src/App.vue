<script setup lang="ts">
import Options from "./components/Options.vue"
import Game from "./components/Game.vue"
import Achievements from "./components/Achievements.vue"
import { onUpdated, ref } from "vue";
import { useMoneyStore } from "./store/money";
import { useBuildingsStore } from "./store/buildings";
import { useAchivementsStore } from "./store/achivements";
import { achivementUnlockable } from "./gameElements/achivementsUtils";

const buildingsStore = useBuildingsStore();
const moneyStore = useMoneyStore();
const achivementsStore = useAchivementsStore();

const tabIndex = ref(0);
const alterted = ref(false);


function setTabIndex(index: number) {
  tabIndex.value = index;
}

function stopAlerted() {
  alterted.value = false;
}

onUpdated(() => {
  const achievements = achivementsStore.getAchivements
  const gameState = { money: moneyStore.getMoney, buildings: buildingsStore.getBuildings, achievements }

  achievements.forEach((achivement) => {
    if (!achivement.isDiscovered && achivementUnlockable(gameState, achivement)) {
      achivementsStore.unlockAchivement(achivement)
      alterted.value = true;
    }
  })

})

</script>

<template>
  <div class="tabs">
    <ul>
      <li :class="{ 'is-active': tabIndex === 0 }">
        <a @click="setTabIndex(0)">Game</a>
      </li>
      <li :class="{ 'is-active': tabIndex === 1 }">
        <a @click="setTabIndex(1)">Options</a>
      </li>
      <li :class="{ 'is-active': tabIndex === 2 }">
        <a @click="setTabIndex(2); stopAlerted()">
          Achievements <span v-if="alterted" class="has-text-info">NEWS!</span>
        </a>
      </li>
    </ul>
  </div>
  <div :class="{ hidden: tabIndex !== 0 }">
    <Game />
  </div>
  <div :class="{ hidden: tabIndex !== 1 }">
    <Options />
  </div>
  <div :class="{ hidden: tabIndex !== 2 }">
    <Achievements :achievements="achivementsStore.getAchivements" />
  </div>
  <div v-if="moneyStore.getMoney < 0">{{ moneyStore.getMoney }}</div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

.app {
  width: 100vw;
  height: 100vh;
}

.hidden {
  display: none;
}
</style>
