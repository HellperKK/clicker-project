<script lang="ts">
  import burger from "../assets/burger.png";
  import { buildingsGain, buildingTruePrice } from "../gameElements/buildings";

  $: money = $$props.money;
  $: buildings = $$props.buildings;

  const { addMoney, buyBuilding } = $$props;

  const display = new Intl.NumberFormat("en-GB", {
    notation: "compact",
    compactDisplay: "short",
  });
</script>

<div class="columns">
  <div class="column is-one-third has-text-centered">
    <p class="is-size-1">
      Money : {display.format(money)} (+{buildingsGain(buildings)}/s)
      <!--{{ formatNumber(buildingsGain(store.getBuildings)) }}/s)-->
    </p>
    <button
      class="transparent-button"
      on:click={() => {
        addMoney(1);
      }}
    >
      <img src={burger} alt="Click me!" />
    </button>
    <br />
    <button class="button" on:click={() => addMoney(1_000_000_000)}>
      Cheat
    </button>
  </div>
  <div class="column">
    <div class="columns">
      <div class="column"></div>
    </div>
    {#each buildings as building}
      <div>
        {#if building.isUnlocked}
        <button
          class="button max-width is-size-4"
          on:click={() => {
            buyBuilding(building.id);
          }}
          disabled={money < buildingTruePrice(building)}
        >
          {building.name} ({building.quantity})
          {display.format(buildingTruePrice(building))}
        </button>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .transparent-button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .max-width {
    width: 100%;
  }
</style>
