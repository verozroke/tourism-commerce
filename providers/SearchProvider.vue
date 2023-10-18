<template>
  <v-dialog v-model="searchStore.dialog" width="600px">
    <div style="border-radius: 10px;" class="bg-white w-full flex flex-col items-center p-6">
      <div class="text-3xl w-full leading-normal tracking-tight font-bold">Search Available Tours</div>
      <div class="text-base text-slate-500 w-full leading-5 tracking-wide">Here you can find our tours my writing just a
        fastest query.</div>
      <v-text-field label="Tour Name" class="w-full mt-6 mb-3" v-model="searchStore.query"
        @update:model-value="() => searchStore.search(searchStore.query)" style="font-size: 24px; !important"
        placeholder="Write a tour name here" color="#28B0A6" :counter="128"
        @click:prepend-inner="() => searchStore.search(searchStore.query)" prepend-inner-icon="mdi-magnify"
        variant="outlined" :loading="searchStore.isLoading"></v-text-field>
      <div class="flex flex-col gap-4 mb-6">
        <SearchItem v-for="tour in searchStore.searchedTourInfos" :key="tour.id" :tourInfo="tour" />
      </div>
      <div class="w-full flex gap-2 justify-end">
        <v-btn style="text-transform: none;" rounded="md" prepend-icon="mdi-shuffle" @click="() => console.log('random')"
          color="#28B0A6" class="text-white" size="large">Random</v-btn>
        <v-btn style="text-transform: none;" rounded="md" prepend-icon="mdi-close" variant="tonal" @click="() => {
          searchStore.dialog = false
        }" color="#28B0A6" size="large">Close</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script setup lang="ts">
import { useSearchStore } from '~/stores/SearchStore';
const searchStore = useSearchStore()

watch(() => searchStore.dialog, () => {
  if (!searchStore.dialog) {
    searchStore.query = ''
    searchStore.searchedTourInfos = []
  }
})

</script>

<style scoped></style>

