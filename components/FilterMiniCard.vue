<template>
  <div @click="() => {
    tourStore.specials.includes(text) ? tourStore.specials = tourStore.specials.filter(special => special !== text) : tourStore.specials.push(text)
    tourStore.getTourInfos()
    tourStore.getTourLength()
  }" :class="{ 'active': tourStore.specials.includes(text) }" v-ripple
    class="flex items-center text-white  w-full rounded-2xl p-4 gap-4 cursor-pointer card"
    style="border: 1px solid #E9ECEF">
    <div class="w-8 h-8 flex items-center justify-center">
      <img :src="icon" class="w-8 h-8" alt="">
    </div>
    <div class="tracking-wide leading-normal text-seagreen font-medium text-sm ">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import { useTourStore } from '~/stores/TourStore';
import type { SpecialOption } from '~/types/tour';

const tourStore = useTourStore()

defineProps<{
  icon: string
  text: SpecialOption
}>()

</script>

<style>
.card {
  transition: .2s;
}

.card.active {
  background-color: #28B0A6 !important;
  border: 1px solid #28B0A6 !important;
  transition: .2s;
}

.card.active .text-sm {
  color: #fff !important;
  transition: .2s;
}

.card.active img {
  filter: brightness(1000%);
  transition: .2s;
}


.card:hover {
  background-color: #28B0A6 !important;
  border: 1px solid #28B0A6 !important;
  transition: .2s;
}

.card:hover .text-sm {
  color: white !important;
  transition: .2s;
}

.card:hover img {
  filter: brightness(1000%);
  transition: .2s;
}
</style>