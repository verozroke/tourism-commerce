<template>
  <v-carousel hide-delimiters cycle show-arrows="hover" :interval="3000">
    <v-carousel-item :src="item.imageUrl" class="w-full" cover :key="item.id" color="#28B0A6"
      v-for="item in carouselItems ? carouselItems : [] ">
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
import type { CarouselItem } from '~/types/client';

const props = defineProps<{
  carouselItems: CarouselItem[] | undefined,
}>()

if (props.carouselItems) {

}

</script>

<style>
.v-img__img.v-img__img--cover,
.v-window.v-theme--light.v-carousel {
  border-top-left-radius: 8px !important;
  border-top-right-radius: 8px !important;
}
</style>