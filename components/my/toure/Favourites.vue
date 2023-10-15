<template>
  <div class="flex flex-col w-full py-10">
    <div class="text-2xl font-bold leading-10 text-oxford">Favourites Tours: ({{ myToureStore.favourites.length }})</div>
    <div class="flex bg-slate-300 mt-4 mb-8 h-[1px] rounded-full w-full"></div>
    <div class="flex flex-wrap w-full gap-5">
      <TourCard :tourInfo="tour" v-for="tour in myToureStore.favourites" :key="tour.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMyToureStore } from '~/stores/MyToureStore';

const myToureStore = useMyToureStore()

</script>

<style scoped></style>