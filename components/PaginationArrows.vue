<template>
  <v-pagination @update:model-value="async (value) => {
    tourStore.page = value
    await tourStore.getTourInfos()
    await tourStore.getTourLength()

  }" color="#28B0A6" v-model="tourStore.page" :length="tourStore.pagesLength" rounded="circle"></v-pagination>
</template>

<script setup lang="ts">
import { useTourStore } from '~/stores/TourStore';


const tourStore = useTourStore()

</script>

<style scoped></style>