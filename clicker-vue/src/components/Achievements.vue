<script setup lang="ts">
import { computed } from 'vue';
import { Achievement } from '../gameElements/achievements';

const props = defineProps<{ achievements: Array<Achievement> }>()

const filteredAchievements = computed(() => props.achievements.filter(achievement => achievement.isDiscovered))
</script>

<template>
  <div class="columns wrap is-3">
    <div v-for="achievement in filteredAchievements" class="column is-2" key={achievement.id}>
      <div class="card">
        <div class="card-content">
          <p class="title is-4">{{ achievement.name }}</p>

          <div class="content">{{ achievement.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
