<script lang="ts">
  import burger from "../assets/burger.png";
  import { download } from "../utils/download";
  import { openFiles } from "../utils/openfiles";

  const { setGame, resetGame } = $$props;

  $: achievements = $$props.achievements;
</script>

<div>
  <div class="columns wrap is-3">
    {#each achievements as achievement}
      {#if achievement.isDiscovered}
        <div class="column is-2">
          <div class="card">
            <div class="card-content">
              <p class="title is-4">{achievement.name}</p>

              <div class="content">{achievement.description}</div>
            </div>
          </div>
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
</style>
