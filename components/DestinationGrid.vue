<template>
  <div class="container w-full grid grid-cols-3 grid-rows-4 gap-4">
    <DestinationCard v-for="card in cards" :key="card.id" :card="card" />
  </div>
</template>

<script setup lang="ts">
import type { DestinationCard } from '~/types/destination.d.ts';





const cards = ref<DestinationCard[]>([
  {
    id: '1',
    title: 'Vietnam',
    category: 'Waterfall',
    rate: 4.5,
    spanning: 'col-span-1 row-span-1',
    imageLink: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '2',
    title: 'Vietnam',
    category: 'Waterfall',
    spanning: 'col-span-1 row-span-1',
    rate: 4.5,
    imageLink: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '3',
    title: 'Vietnam',
    category: 'Waterfall',
    rate: 4.5,
    spanning: 'col-span-1 row-span-2',
    imageLink: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '4',
    title: 'Vietnam',
    category: 'Waterfall',
    spanning: 'col-span-2 row-span-2',
    rate: 4.5,
    imageLink: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '9',
    title: 'Vietnam',
    category: 'Waterfall',
    spanning: 'col-span-1 row-span-1',
    rate: 4.5,
    imageLink: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '5',
    title: 'Vietnam',
    category: 'Waterfall',
    spanning: 'col-span-3 row-span-1',
    rate: 4.5,
    imageLink: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '6',
    title: 'Vietnam',
    category: 'Waterfall',
    spanning: 'col-span-1 row-span-1',
    rate: 4.5,
    imageLink: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '7',
    title: 'Vietnam',
    category: 'Waterfall',
    spanning: 'col-span-1 row-span-1',
    rate: 4.5,
    imageLink: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '8',
    title: 'Vietnam',
    category: 'Waterfall',
    spanning: 'col-span-1 row-span-1',
    rate: 4.5,
    imageLink: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
])

</script>

<style scoped></style>