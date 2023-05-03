<script setup lang="ts">
import { Ref, onMounted, onUnmounted, onUpdated, ref } from 'vue';
import { useGameStore } from '../store';
import { Building, buildingShowingValue, buildingTruePrice, buildingsGain } from '../buildings';
import burger from "../assets/burger.png";

const store = useGameStore()
let interval: Ref<number | null> = ref(null);

onMounted(() => {
  interval.value = setInterval(() => {
    store.changeMoneyByAmount(buildingsGain(store.getBuildings) / 10)
  }, 100)
})

onUpdated(() => {
  if (interval.value) {
    clearInterval(interval.value);
  }
  interval.value = setInterval(() => {
    store.changeMoneyByAmount(buildingsGain(store.getBuildings) / 10)
  }, 100)

  store.getBuildings.forEach(building => {
    if (!building.isUnlocked && buildingShowingValue(building) <= store.getMoney) {
      store.unlockBuilding(building)
    }
  })
})

onUnmounted(() => {
  if (interval.value) {
    clearInterval(interval.value);
  }
})


function buildingTitle(building: Building) {
  return `${building.desc} (${building.moneyGain} /s)`;
}

function buyBuilding(building: Building) {
  store.changeMoneyByAmount(Math.ceil(-buildingTruePrice(building)));
  store.buyBuilding(building);
}

function formatNumber(num: number) {
  const display = new Intl.NumberFormat("en-GB", {
    notation: "compact",
    compactDisplay: "short",
  });

  return display.format(num);
}
</script>

<template>
  <div class="columns">
    <div class="column is-one-third  has-text-centered">
      <p class="is-size-1">
        Money : {{ formatNumber(store.getMoney) }} (+
        {{ formatNumber(buildingsGain(store.getBuildings)) }}/s)
      </p>
      <button class="transparent-button" @click="store.changeMoneyByAmount(1)">
        <img :src="burger" alt="Click me!" />
      </button>
      <br />
      <button class="button" @click="store.changeMoneyByAmount(1_000_000_000)">
        Cheat
      </button>
    </div>
    <div class="column">
      <div class="columns">
        <div class="column"></div>
      </div>
      <div v-for="building in  store.getBuildings" key={building.id}>
        <button v-if="building.isUnlocked" class="button max-width is-size-4" :title="buildingTitle(building)"
          :disabled="store.getMoney < buildingTruePrice(building)" @click="buyBuilding(building)">
          {{ building.name }}({{ building.quantity }}) {{ formatNumber(buildingTruePrice(building)) }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.max-width {
  width: 100%;
}

.transparent-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
