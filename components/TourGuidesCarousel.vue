<template>
  <div class="px-0 container overflow-hidden rounded-3xl">
    <div class="flex toure-guide-carousel transition duration-300 gap-16 items-center ">
      <TourGuideCard v-for="(guide, i) in tourStore.guides" :index="i" :tourGuide='guide' :key="guide.id" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { useTourStore } from '~/stores/TourStore';

const tourStore = useTourStore()

onMounted(async () => {
  await tourStore.getTourGuides()
})

</script>

<style scoped></style>