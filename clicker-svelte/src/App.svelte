<script lang="ts">
  import Game from "./lib/Game.svelte";
  import Options from "./lib/Options.svelte";
  import {
    BUILDINGS,
    buildingsGain,
    buildingShowingValue,
    buildingTruePrice,
    type Building,
  } from "./gameElements/buildings";
  import { onMount, tick } from "svelte";
  import type GameState from "./utils/Gamestate";
  import { ACHIEVEMENTS } from "./gameElements/achievements";
  import Achievements from "./lib/Achievements.svelte";
  import { achivementUnlockable } from "./gameElements/achivementsUtils";

  let tabIndex: number = 0;
  let alerted: boolean = false;
  let money = 0;
  let buildings = BUILDINGS();
  let achievements = ACHIEVEMENTS();
  let event: {
    (this: Document, ev: Event): any;
  } | null = null;
  let date = new Date();

  onMount(() => {
    if (event) {
      document.removeEventListener("visibilitychange", event);
    }
    event = () => {
      if (document.hidden) {
        date = new Date();
      } else {
        const nowDate = new Date();
        const delay = nowDate.getTime() - date.getTime();
        const reward = buildingsGain(buildings);
        addMoney(reward * Math.floor(delay / 1000));
      }
    };
    document.addEventListener("visibilitychange", event);
  });

  function addMoney(amount: number) {
    money = money + amount;
  }

  function updateMoney() {
    money = money + buildingsGain(buildings) / 10;
  }

  function buyBuilding(id: number) {
    const building = buildings.find((b) => b.id === id);
    if (building === undefined) {
      return;
    }

    if (money >= buildingTruePrice(building)) {
      money -= buildingTruePrice(building);
      building.quantity += 1;
      buildings = buildings;
    }
  }

  function resetGame() {
    money = 0;
    buildings = BUILDINGS();
    achievements = ACHIEVEMENTS();
  }

  function setGame(game: GameState) {
    money = game.money;
    buildings = game.buildings;
    achievements = game.achievements;
  }

  let clear: number;
  $: {
    clearInterval(clear);
    clear = setInterval(updateMoney, 100);
    for (const achievement of achievements) {
      if (
        !achievement.isDiscovered &&
        achivementUnlockable({ money, buildings, achievements }, achievement)
      ) {
        achievement.isDiscovered = true;
        achievements = achievements;
        alerted = true;
      }
    }

    for (const building of buildings) {
      if (!building.isUnlocked && buildingShowingValue(building) <= money) {
        building.isUnlocked = true;
        buildings = buildings;
      }
    }
  }
</script>

<main>
  <div class="tabs">
    <ul>
      <li class={tabIndex === 0 ? "is-active" : ""}>
        <a
          on:click={() => {
            tabIndex = 0;
          }}>Game</a
        >
      </li>
      <li class={tabIndex === 1 ? "is-active" : ""}>
        <a on:click={() => (tabIndex = 1)}>Options</a>
      </li>
      <li class={tabIndex === 2 ? "is-active" : ""}>
        <a
          on:click={() => {
            tabIndex = 2;
            alerted = false;
          }}
        >
          Achivements {#if alerted}<span class="has-text-info">NEWS!</span>{/if}
        </a>
      </li>
    </ul>
  </div>
  <div class={tabIndex !== 0 ? "hidden" : ""}>
    <Game {money} {buildings} {buyBuilding} {addMoney} />
  </div>
  <div class={tabIndex !== 1 ? "hidden" : ""}>
    <Options {money} {buildings} {achievements} {resetGame} {setGame} />
  </div>
  <div class={tabIndex !== 2 ? "hidden" : ""}>
    <Achievements {achievements} />
  </div>
</main>

<style>
  .hidden {
    display: none;
  }
</style>
