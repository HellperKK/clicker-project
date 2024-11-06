<script setup lang="ts">
import { useAchivementsStore } from '../store/achivements';
import { useBuildingsStore } from '../store/buildings';
import { useMoneyStore } from '../store/money';
import GameState from '../utils/Gamestate';
import { download } from '../utils/download';
import { openFiles } from '../utils/openfiles';


const buildingsStore = useBuildingsStore();
const moneyStore = useMoneyStore();
const achivementsStore = useAchivementsStore();

function reset() {
  moneyStore.resetMoney();
  buildingsStore.resetBuildings();
  achivementsStore.resetAchivements();
}

function save() {
  const state: GameState = {
    buildings: buildingsStore.getBuildings,
    money: moneyStore.getMoney,
    achievements: achivementsStore.getAchivements
  };
  localStorage.setItem("save", JSON.stringify(state));
}

function load() {
  const save = localStorage.getItem("save");
  if (save !== null) {
    const state: GameState = JSON.parse(save);
    moneyStore.setMoney(state.money);
    buildingsStore.setBuildings(state.buildings);
    achivementsStore.setAchivements(state.achievements);
  }
}

function exportSave() {
  const state: GameState = {
    buildings: buildingsStore.getBuildings,
    money: moneyStore.getMoney,
    achievements: achivementsStore.getAchivements
  };
  download("save.json", JSON.stringify(state));
}

async function importSave() {
  const files = await openFiles();
  const file = files[0];

  if (file) {
    const content = await file.text();
    const state: GameState = JSON.parse(content);
    moneyStore.setMoney(state.money);
    buildingsStore.setBuildings(state.buildings);
    achivementsStore.setAchivements(state.achievements);
  }
}
</script>

<template>
  <button class="button" @click="reset">
    Reset
  </button>
  <button class="button" @click="save">
    Save
  </button>
  <button class="button" @click="load">
    Load
  </button>
  <button class="button" @click="exportSave">
    Export
  </button>
  <button class="button" @click="importSave">
    Import
  </button>
</template>

<style scoped></style>
