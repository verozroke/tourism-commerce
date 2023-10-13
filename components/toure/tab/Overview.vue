<template>
  <div class="w-full mt-14">
    <div class="flex gap-16">
      <v-icon class="text-gray-400" size="72px">mdi-file-document-outline</v-icon>
      <div class="flex flex-col flex-grow">
        <div class="tracking-wide text-oxford leading-normal text-base">{{ tourDetailStore.tourInfo.description }}</div>
        <div class="grid grid-cols-3 w-full grid-rows-2 gap-y-8 mt-14">
          <div class="flex flex-col gap-5">
            <div class="text-base text-slate-600 leading-normal tracking-wide">Duration</div>
            <div class="flex items-center gap-2 text-seagreen">
              <v-icon size='32px'>mdi-clock-time-three-outline</v-icon>
              <div class="font-medium leading-5 text-oxford text-base">{{ tourDetailStore.tourInfo.duration ?
                tourDetailStore.tourInfo.duration.name : 'Unknown' }}</div>
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <div class="text-base text-slate-600 leading-normal tracking-wide">Activity</div>
            <div class="flex items-center gap-2 text-seagreen">
              <v-icon size='32px'>mdi-ski-cross-country</v-icon>
              <div class="font-medium leading-5 text-oxford text-base">{{ tourDetailStore.tourInfo.activity }}</div>
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <div class="text-base text-slate-600 leading-normal tracking-wide">Physical</div>
            <div class="flex items-center gap-2 text-seagreen">
              <v-icon size='32px'>mdi-speedometer</v-icon>
              <div class="font-medium leading-5 text-oxford text-base">{{ tourDetailStore.tourInfo.physical }}</div>
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <div class="text-base text-slate-600 leading-normal tracking-wide">Group Size</div>
            <div class="flex items-center gap-2 text-seagreen">
              <v-icon size='32px'>mdi-account-multiple</v-icon>
              <div class="font-medium leading-5 text-oxford text-base">{{ tourDetailStore.tourInfo.groupSize }}</div>
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <div class="text-base text-slate-600 leading-normal tracking-wide">Age</div>
            <div class="flex items-center gap-2 text-seagreen">
              <v-icon size='32px'>mdi-cake</v-icon>
              <div class="font-medium leading-5 text-oxford text-base">{{ tourDetailStore.tourInfo.ageGroup ?
                tourDetailStore.tourInfo.ageGroup.name : 'Unknown' }}</div>
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <div class="text-base text-slate-600 leading-normal tracking-wide">Season</div>
            <div class="flex items-center gap-2 text-seagreen">
              <v-icon size='32px'>mdi-snowflake</v-icon>
              <div class="font-medium leading-5 text-oxford text-base">{{ tourDetailStore.tourInfo.season }}</div>
            </div>
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