<template>
  <div class="flex flex-col w-full gap-2">
    <div class="text-slate-500 text-base leading-5 font-medium">
      <RouterLink to="/toures" class="hover:underline">Toures</RouterLink> > {{ tourDetailStore.tourInfo.location }}
    </div>
    <div class="flex w-full justify-between items-center">
      <div class="text-4xl font-bold leading-10 text-oxford">{{ tourDetailStore.tourInfo.title }} in {{
        tourDetailStore.tourInfo.location }}</div>
      <!-- fixme: make v-btns -->
      <div class="flex gap-1">
        <v-btn @click="() => copyToureLink(tourDetailStore.tourInfo.id)" icon="mdi-share-variant"
          class="text-oxford mr-4"></v-btn>
        <v-btn :color="tourDetailStore.isLiked ? `#FA126C` : ``" :class="tourDetailStore.isLiked ? 'text-white' : ''"
          @click="async () => await tourDetailStore.likeTour()" icon="mdi-heart"></v-btn>
      </div>
    </div>
    <div class="flex">
      <svg v-for="n in 5" :key="n" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
        fill="none">
        <path
          d="M11.6865 9.30203C11.5398 9.44294 11.4723 9.64671 11.5058 9.84656L12.0095 12.6085C12.052 12.8426 11.9522 13.0795 11.7545 13.2148C11.5607 13.3551 11.3029 13.3719 11.0916 13.2597L8.58215 11.9629C8.49489 11.9169 8.39801 11.8922 8.29885 11.8894H8.14531C8.09205 11.8972 8.03992 11.9141 7.99233 11.9399L5.48232 13.2428C5.35824 13.3046 5.21772 13.3265 5.08004 13.3046C4.74462 13.2417 4.52081 12.9251 4.57577 12.5911L5.08004 9.82916C5.11347 9.62763 5.04604 9.42273 4.8993 9.27958L2.85333 7.3148C2.68222 7.15032 2.62273 6.90332 2.70092 6.68045C2.77684 6.45815 2.97062 6.29592 3.20462 6.25943L6.02058 5.85468C6.23476 5.83279 6.42286 5.70368 6.51919 5.51281L7.76002 2.99228C7.78949 2.93614 7.82745 2.8845 7.87334 2.84071L7.92433 2.80141C7.95096 2.77222 7.98156 2.74809 8.01556 2.72844L8.07731 2.70598L8.17364 2.66669H8.41217C8.62521 2.68858 8.81275 2.81489 8.91077 3.00351L10.168 5.51281C10.2587 5.69638 10.4349 5.82381 10.6383 5.85468L13.4543 6.25943C13.6922 6.29311 13.8911 6.45591 13.9699 6.68045C14.0441 6.90556 13.9801 7.15256 13.8056 7.3148L11.6865 9.30203Z"
          fill="#F5A623" />
      </svg>
      <div class="text-base text-slate-500 leading-5 font-medium ml-2">{{ tourDetailStore.tourInfo.rate }} ({{
        tourDetailStore.tourInfo.rateAmount }} reviews)</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTourDetailStore } from '~/stores/TourDetailStore';
import { copyToureLink } from '~/utils/utils'


const tourDetailStore = useTourDetailStore()


</script>

<style scoped></style>