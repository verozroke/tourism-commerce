<template>
  <div class="container px-0 w-full grid grid-cols-3 grid-rows-4 gap-4">
    <DestinationCard v-for="card in tourStore.destinationCards" :key="card.id" :card="card" />
  </div>
</template>

<script setup lang="ts">
import { useTourStore } from '~/stores/TourStore';

const tourStore = useTourStore()




onMounted(async () => {
  await tourStore.getTopDestinations()
})

</script>

<style scoped></style>