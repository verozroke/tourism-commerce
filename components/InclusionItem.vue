<template>
  <div class="flex gap-2 items-center">
    <v-icon v-if="type === 'Plus'" class="text-seagreen" size='24px'>mdi-check</v-icon>
    <v-icon v-if="type === 'Minus'" class="text-red-500" size='24px'>mdi-close</v-icon>
    <div class="text-oxford text-base">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import type { InclusionType } from '~/types/client';


defineProps<{
  type: InclusionType,
  text: string,
}>()

</script>

<style scoped></style>