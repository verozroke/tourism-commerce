<template>
  <div class="w-full mt-14">
    <div class="flex gap-16">
      <v-icon class="text-gray-400" size="72px">mdi-map-marker-path</v-icon>
      <div class="flex flex-col flex-grow">
        <v-expansion-panels>
          <v-expansion-panel color="#343432" v-for="item in tourDetailStore.tourInfo.itineraries" :key="item.id">
            <v-expansion-panel-title color="#FBFBFB" style="
              display: flex;
              align-items: center;
              gap: 1em;
            ">
              <div class="w-8 h-8 bg-seagreen text-white font-bold flex items-center justify-center text-lg rounded-full">
                {{ item.dayNumber }}</div>
              <div style="font-weight: 600; font-size: 18px" class="title text-oxford leading-5">
                Day {{ item.dayNumber }}
              </div>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="text">
              <div class="text-inner">
                {{ item.text }}
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTourDetailStore } from '~/stores/TourDetailStore';
const tourDetailStore = useTourDetailStore()
</script>

<style scoped>
.text {
  background-color: #fff;
  color: #1D293F;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.5px;
  font-size: 16px;
}

.text-inner {
  padding: 40px 20px;
  white-space: pre-line;
}
</style>