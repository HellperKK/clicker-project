<script lang="ts">
  import burger from "../assets/burger.png";
  import { download } from "../utils/download";
  import { openFiles } from "../utils/openfiles";

  const { setGame, resetGame } = $$props;

  $: buildings = $$props.buildings;
  $: money = $$props.money;
  $: achievements = $$props.achievements;
</script>

<div>
  <button
    class="button"
    on:click={() => {
      resetGame();
    }}
  >
    Reset
  </button>
  <button
    class="button"
    on:click={() => {
      const gameState = { buildings, money, achievements };
      localStorage.setItem("save", JSON.stringify(gameState));
    }}
  >
    Save
  </button>
  <button
    class="button"
    on:click={() => {
      const save = localStorage.getItem("save");
      if (save !== null) {
        const state = JSON.parse(save);
        setGame(state);
      }
    }}
  >
    Load
  </button>
  <button class="button" on:click={() => {
    const gameState = { buildings, money, achievements };
    download("save.json", JSON.stringify(gameState));
  }}> Export </button>
  <button class="button" on:click={async () => {
    const files = await openFiles();
  const file = files[0];

  if (file) {
    const content = await file.text();
    const state = JSON.parse(content);
    setGame(state);
  }
  }}> Import </button>
</div>

<style>
</style>
