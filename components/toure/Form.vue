<template>
  <div class="bg-gray-100 px-6 py-4 rounded-lg min-w-[400px] flex flex-col">
    <div class="text-red-400 line-through text-sm leading-5 font-medium">£2469</div>
    <div class="flex items-center">
      <div class="text-oxford text-4xl font-bold mr-2">£1759</div>
      <div class="text-sm text-slate-600 font-medium leading-5 flex-1">per person</div>
      <v-chip color="#28B0A6" size="large">20% OFF</v-chip>
    </div>
    <div class="text-slate-400 text-sm leading-normal mt-2 mb-8">*Price based on selections bellow.</div>
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <div class="text-base text-slate-600 leading-normal tracking-wide">Dates</div>
        <v-text-field hide-details="auto" label="" placeholder="Select preferred dates" variant="outlined"
          append-inner-icon="mdi-calendar-range"></v-text-field>
      </div>
      <div class="flex flex-col gap-2">
        <div class="text-base text-slate-600 leading-normal tracking-wide">Travelers</div>
        <v-text-field type="number" hide-details="auto" placeholder="2 Adult, 1 Child" variant="outlined"
          append-inner-icon="mdi-ski-cross-country"></v-text-field>
      </div>
      <div class="flex flex-col gap-2">
        <div class="text-base text-slate-600 leading-normal tracking-wide">Selections</div>
        <v-text-field label="" hide-details="auto" variant="outlined" placeholder="Flight, hotel, car etc."
          append-inner-icon="mdi-car"></v-text-field>
      </div>
    </div>
    <v-btn size="large" color="#FA126C" rounded="lg" class="text-white mt-10" style="text-transform: none;">
      Check Availability
    </v-btn>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>