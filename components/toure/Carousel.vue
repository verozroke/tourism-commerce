<template>
  <v-carousel hide-delimiters>
    <v-carousel-item :src="item.src" class="w-full" cover :key="item.id" color="#28B0A6" v-for="item in carouselItems">
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
import { CarouselItem } from '~/types/tour';


const props = defineProps<{
  // title: string,

  carouselItems: CarouselItem[],
  // path: string,
  // numberOfReviews: number,
}>()



</script>

<style>
.v-img__img.v-img__img--cover,
.v-window.v-theme--light.v-carousel {
  border-radius: 8px !important;
}
</style>