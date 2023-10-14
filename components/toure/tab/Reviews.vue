<template>
  <div class="w-full mt-14">
    <div class="flex gap-16">
      <v-icon class="text-gray-400" size="72px">mdi-star-shooting</v-icon>
      <div class="flex flex-col flex-grow gap-5 pb-5">
        <ReviewItem v-for="item in tourDetailStore.tourInfo.reviews" :key="item.id" :review="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTourDetailStore } from '~/stores/TourDetailStore';

const tourDetailStore = useTourDetailStore()
</script>

<style scoped></style>
