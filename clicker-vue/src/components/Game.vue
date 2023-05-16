<script setup lang="ts">
import { Ref, onMounted, onUnmounted, onUpdated, ref } from 'vue';
import { useBuildingsStore } from '../store/buildings';
import { Building, buildingShowingValue, buildingTruePrice, buildingsGain } from '../gameElements/buildings';
import burger from "../assets/burger.png";
import { useMoneyStore } from '../store/money';

const buildingsStore = useBuildingsStore();
const moneyStore = useMoneyStore();

let interval: Ref<number | null> = ref(null);
let date: Ref<Date> = ref(new Date());
let event: Ref<((this: Document, ev: Event) => any) | null> = ref(null);

onMounted(() => {
  interval.value = setInterval(() => {
    moneyStore.changeMoneyByAmount(buildingsGain(buildingsStore.getBuildings) / 10)
  }, 100)
})

onUpdated(() => {
  if (interval.value) {
    clearInterval(interval.value);
  }
  interval.value = setInterval(() => {
    moneyStore.changeMoneyByAmount(buildingsGain(buildingsStore.getBuildings) / 10)
  }, 100)

  buildingsStore.getBuildings.forEach(building => {
    if (!building.isUnlocked && buildingShowingValue(building) <= moneyStore.getMoney) {
      buildingsStore.unlockBuilding(building)
    }
  })

  if (event.value) {
    document.removeEventListener("visibilitychange", event.value);
  }
  event.value = () => {
    if (document.hidden) {
      console.log("hidden");
      date.value = new Date();
    } else {
      console.log("reveal");
      const nowDate = new Date();
      const delay = nowDate.getTime() - date.value.getTime();
      const reward = buildingsGain(buildingsStore.getBuildings);
      moneyStore.changeMoneyByAmount(reward * Math.floor(delay / 1000));
    }
  };
  document.addEventListener("visibilitychange", event.value);

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
  moneyStore.changeMoneyByAmount(Math.ceil(-buildingTruePrice(building)));
  buildingsStore.buyBuilding(building);
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
        Money : {{ formatNumber(moneyStore.getMoney) }} (+
        {{ formatNumber(buildingsGain(buildingsStore.getBuildings)) }}/s)
      </p>
      <button class="transparent-button" @click="moneyStore.changeMoneyByAmount(1)">
        <img :src="burger" alt="Click me!" />
      </button>
      <br />
      <button class="button" @click="moneyStore.changeMoneyByAmount(1_000_000_000)">
        Cheat
      </button>
    </div>
    <div class="column">
      <div class="columns">
        <div class="column"></div>
      </div>
      <div v-for="building in  buildingsStore.getBuildings" key={building.id}>
        <button v-if="building.isUnlocked" class="button max-width is-size-4" :title="buildingTitle(building)"
          :disabled="moneyStore.getMoney < buildingTruePrice(building)" @click="buyBuilding(building)">
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
