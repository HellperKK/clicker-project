<script setup lang="ts">
import { useBuildingsStore } from '../store/buildings';
import { useMoneyStore } from '../store/money';
import { download } from '../utils/download';
import { openFiles } from '../utils/openfiles';


const buildingsStore = useBuildingsStore();
const moneyStore = useMoneyStore();

function reset() {
  moneyStore.resetMoney(); buildingsStore.resetBuildings();
}

function save() {
  const state = {
    buildings: buildingsStore.getBuildings,
    money: moneyStore.getMoney,
  };
  localStorage.setItem("save", JSON.stringify(state));
}

function load() {
  const save = localStorage.getItem("save");
  if (save !== null) {
    const state = JSON.parse(save);
    moneyStore.setMoney(state.money);
    buildingsStore.setBuildings(state.buildings);
  }

}

function exportSave() {
  const state = {
    buildings: buildingsStore.getBuildings,
    money: moneyStore.getMoney,
  };
  download("save.json", JSON.stringify(state));
}

async function importSave() {
  const files = await openFiles();
  const file = files[0];

  if (file) {
    const content = await file.text();
    const state = JSON.parse(content);
    moneyStore.setMoney(state.money);
    buildingsStore.setBuildings(state.buildings);
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
