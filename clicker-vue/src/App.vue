<script setup lang="ts">
import Options from "./components/Options.vue"
import Game from "./components/Game.vue"
import { ref } from "vue";

const tabIndex = ref(0);

function setTabIndex(index: number) {
  tabIndex.value = index;
}

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
    </ul>
  </div>
  <div :class="{ hidden: tabIndex !== 0 }">
    <Game />
  </div>
  <div :class="{ hidden: tabIndex !== 1 }">
    <Options />
  </div>
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
