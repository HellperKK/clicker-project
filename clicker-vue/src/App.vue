<script setup lang="ts">
import Options from "./components/Options.vue"
import Game from "./components/Game.vue"
import Achievements from "./components/Achievements.vue"
import { onUpdated, ref } from "vue";
import { useGameStore } from "./store";
import { ACHIEVEMENTS } from "./achievements";

const store = useGameStore()

const tabIndex = ref(0);
const achievements = ref(ACHIEVEMENTS);
const alterted = ref(false);


function setTabIndex(index: number) {
  tabIndex.value = index;
}

function stopAlerted() {
  alterted.value = false;
}

onUpdated(() => {
  const gameState = { money: store.getMoney, buildings: store.getBuildings }

  achievements.value.forEach((achivement, index) => {
    if (!achivement.isDiscovered && achivement.condition(gameState)) {
      achievements.value[index].isDiscovered = true;
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
    <Achievements :achievements="achievements" />
  </div>
  <div v-if="store.getMoney < 0">{{ store.getMoney }}</div>
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
