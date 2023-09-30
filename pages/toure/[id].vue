<template>
  <!-- {{ $route.params.id }} -->
  <div class="absolute inset-0 py-28">
    <div class="container py-10  flex flex-col gap-10 w-full px-0">
      <ToureCarousel :carousel-items="carouselItems" />
      <div class="flex justify-between">
        <div class="w-[784px] flex flex-col">
          <ToureInfo />
          <div class="flex bg-slate-300 mt-4 mb-8 h-[1px] rounded-full w-full"></div>
          <ToureTabs />
        </div>
        <ToureForm />
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { CarouselItem } from '~/types/tour';



const carouselItems = ref<CarouselItem[]>([
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1614832359988-2e3aa24b4aba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1690394472903-23ce57cb5953?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1665689285360-2c67e6084d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1664388519335-c3752b51efda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1528159597562-ef0695254997?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
])

</script>


<style></style>