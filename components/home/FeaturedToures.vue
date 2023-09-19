<template>
  <div class="flex flex-col gap-16 py-20">
    <div class="flex flex-col container px-0 w-full gap-4">
      <h1 class="font-bold text-4xl  tracking-tight">Featured Tours</h1>
      <div class="text-2xl text-oxford opacity-70 ">Timber Wolf Adventure is a Tanzanian based Tour Operator located in
        Arusha. We specialize in both Treks and Safari to all Tanzania destinations and we offer you the unique
        opportunity to climb Mt. Kilimanjaro and to explore the African plains with an experienced native team that offers
        top quality large tour operator service and safety at local tour operator prices.</div>
    </div>
    <div class="grid grid-cols-3 grid-rows-2 container px-0 w-full gap-y-28 gap-x-8">
      <TourCard v-for="tourInfo in tourInfos" :key="tourInfo.id" :tourInfo="tourInfo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TourInfo } from '~/types/tour';




const tourInfos = ref<TourInfo[]>([
  {
    id: '1',
    location: 'Manyara | Lake Eyasi | Ngorongoro | Serengeti visit Village',
    duration: '8 Days',
    price: 2080,
    rate: 4.7,
    title: 'Tetema Tour',
    rateAmount: 108,
    imageUrl: 'https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2108&q=80',
  },
  {
    id: '2',
    location: 'Manyara | Lake Eyasi | Ngorongoro | Serengeti',
    duration: '7 Days',
    price: 1820,
    rate: 4.7,
    title: 'Pamoja Tour',
    rateAmount: 108,
    imageUrl: 'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',

  },
  {
    id: '3',
    location: 'Tarangire | Lake Manyara | Serengeti Ngorongoro Crater',
    duration: '6 Days',
    price: 1560,
    rate: 4.7,
    title: 'Rose Tour',
    rateAmount: 108,
    imageUrl: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80',

  },
  {
    id: '4',
    location: 'Lake Manyara | Serengeti | Ngorongoro Crater',
    duration: '5 Days',
    price: 1300,
    rate: 4.7,
    title: 'Ansi Tour',
    rateAmount: 108,
    imageUrl: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',

  },
  {
    id: '5',
    location: 'Lake Manyara | Serengeti | Ngorongoro Crater',
    duration: '4 Days',
    price: 1040,
    rate: 4.7,
    title: 'Lina Tour',
    rateAmount: 108,
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80',

  },
  {
    id: '6',
    location: 'Tarangire | Ngorongoro Crater | Lake Manyara',
    duration: '3 Days',
    price: 750,
    rate: 4.7,
    title: 'Sharma Tour ',
    rateAmount: 108,
    imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',

  },
])

</script>

<style scoped></style>