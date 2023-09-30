<template>
  <div>
    <v-tabs v-model="tab" color="#28B0A6">
      <v-tab value="Overview" style="font-weight: 300; text-transform: none">Overview</v-tab>
      <v-tab value="Itinerary" style="font-weight: 300; text-transform: none">Itinerary</v-tab>
      <v-tab value="Inclusions" style="font-weight: 300; text-transform: none">Inclusions</v-tab>
      <v-tab value="Reviews" style="font-weight: 300; text-transform: none">Reviews</v-tab>
      <v-tab value="FAQ" style="font-weight: 300; text-transform: none">FAQ</v-tab>
      <v-tab value="Essential Info" style="font-weight: 300; text-transform: none">Essential Info</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="Overview">
        <ToureTabOverview />
      </v-window-item>
      <v-window-item value="Itinerary">

      </v-window-item>
      <v-window-item value="Inclusions">

      </v-window-item>
      <v-window-item value="Reviews">

      </v-window-item>
      <v-window-item value="FAQ">

      </v-window-item>
      <v-window-item value="Essential Info">

      </v-window-item>
    </v-window>
  </div>
</template>

<script setup lang="ts">


const tab = ref('')

</script>

<style scoped></style>