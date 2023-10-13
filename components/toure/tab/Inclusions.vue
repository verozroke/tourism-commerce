<template>
  <div class="w-full mt-14">
    <div class="flex gap-16">
      <v-icon class="text-gray-400" size="72px">mdi-map-plus</v-icon>
      <div class="flex flex-col flex-grow">
        <div class="tracking-wide text-oxford leading-normal text-base">{{ tourDetailStore.tourInfo.inclusionText }}</div>
        <div class="mt-14 flex flex-col gap-5">
          <div class="flex gap-2 items-center">
            <v-icon class="text-seagreen" size='24px'>mdi-check-bold</v-icon>
            <div class="text-oxford text-base">All breakfasts, 4 packed lunches, and 6 dinners</div>
          </div>
          <div class="flex gap-2 items-center">
            <v-icon class="text-seagreen" size='24px'>mdi-check-bold</v-icon>
            <div class="text-oxford text-base">All breakfasts, 4 packed lunches, and 6 dinners</div>
          </div>
          <div class="flex gap-2 items-center">
            <v-icon class="text-seagreen" size='24px'>mdi-check-bold</v-icon>
            <div class="text-oxford text-base">All breakfasts, 4 packed lunches, and 6 dinners</div>
          </div>
          <div class="flex gap-2 items-center">
            <v-icon class="text-seagreen" size='24px'>mdi-check-bold</v-icon>
            <div class="text-oxford text-base">All breakfasts, 4 packed lunches, and 6 dinners</div>
          </div>
          <div class="flex gap-2 items-center">
            <v-icon class="text-red-500" size='24px'>mdi-close</v-icon>
            <div class="text-oxford text-base">All breakfasts, 4 packed lunches, and 6 dinners</div>
          </div>
          <div class="flex gap-2 items-center">
            <v-icon class="text-red-500" size='24px'>mdi-close</v-icon>
            <div class="text-oxford text-base">All breakfasts, 4 packed lunches, and 6 dinners</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTourDetailStore } from '~/stores/TourDetailStore';

const tourDetailStore = useTourDetailStore()

</script>

<style scoped></style>