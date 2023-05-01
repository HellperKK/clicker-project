<script setup lang="ts">
import { useGameStore } from '../store';
import { download, openFiles } from "../utils"

const store = useGameStore()

function reset() {
  store.resetMoney(); store.resetBuildings();
}

function save() {
  const state = {
    buildings: store.getBuildings,
    money: store.getMoney,
  };
  localStorage.setItem("save", JSON.stringify(state));
}

function load() {
  const save = localStorage.getItem("save");
  if (save !== null) {
    const state = JSON.parse(save);
    store.setMoney(state.money);
    store.setBuildings(state.buildings);
  }

}

function exportSave() {
  const state = {
    buildings: store.getBuildings,
    money: store.getMoney,
  };
  download("save.json", JSON.stringify(state));
}

async function importSave() {
  const files = await openFiles();
  const file = files[0];

  if (file) {
    const content = await file.text();
    const state = JSON.parse(content);
    store.setMoney(state.money);
    store.setBuildings(state.buildings);
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
