<template>
  <div>
    <v-tabs v-model="tab" color="#28B0A6">
      <v-tab value="Overview" style="font-weight: 300; text-transform: none">Overview</v-tab>
      <v-tab value="Itinerary" style="font-weight: 300; text-transform: none">Itinerary</v-tab>
      <v-tab value="Inclusions" style="font-weight: 300; text-transform: none">Inclusions</v-tab>
      <v-tab value="Reviews" style="font-weight: 300; text-transform: none">Reviews</v-tab>
      <v-tab value="FAQ" style="font-weight: 300; text-transform: none">FAQ</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="Overview">
        <ToureTabOverview />
      </v-window-item>
      <v-window-item value="Itinerary">
        <ToureTabItinerary />
      </v-window-item>
      <v-window-item value="Inclusions">
        <ToureTabInclusions />
      </v-window-item>
      <v-window-item value="Reviews">
        <ToureTabReviews />
      </v-window-item>
      <v-window-item value="FAQ">
        <ToureTabFAQ />
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup lang="ts">
const tab = ref('')
</script>

<style scoped></style>