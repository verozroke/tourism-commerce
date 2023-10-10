<template>
  <div class="flex flex-col gap-16 py-20">
    <div class="flex flex-col container px-0 w-full gap-4">
      <h1 class="font-bold text-4xl  tracking-tight">Featured Tours</h1>
      <div class="text-2xl text-oxford opacity-70 ">Timber Wolf Adventure is a Tanzanian based Tour Operator located in
        Arusha. We specialize in both Treks and Safari to all Tanzania destinations and we offer you the unique
        opportunity to climb Mt. Kilimanjaro and to explore the African plains with an experienced native team that offers
        top quality large tour operator service and safety at local tour operator prices.</div>
    </div>
    <div class="grid grid-cols-3 grid-rows-2 container px-0 w-full gap-y-10 gap-x-8">
      <RouterLink v-for="tour in tourStore.featuredTours" :key="tour.id" :to='`/toure/${tour.id}`'>
        <TourCard :tourInfo="tour" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTourStore } from '~/stores/TourStore';


const tourStore = useTourStore()

onMounted(() => {
  tourStore.getFeaturedTours()


})

</script>

<style scoped></style>