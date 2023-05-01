<script setup lang="ts">
import { ref, onUpdated } from 'vue';
import { useGameStore } from '../store';

const props = defineProps<{ minimalShow: number }>()

let visible = ref(false);

const store = useGameStore()

onUpdated(() => {
  if (!visible.value && props.minimalShow <= store.getMoney) {
    visible.value = true;
  }
})
</script>

<template>
  <slot v-if="visible"></slot>
</template>

<style scoped></style>
