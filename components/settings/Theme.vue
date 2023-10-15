<template>
  <div class="flex flex-col pb-4 w-full">
    <div class="text-2xl font-bold w-full leading-10 text-oxford">Theme Settings</div>
    <div class="text-sm font-medium w-full leading-5 text-slate-500">Lorem ipsum dolor sit amet consectetur,
      adipisicing
      elit. Commodi maxime deserunt doloremque unde enim quaerat!</div>
    <div class="flex bg-slate-300 my-4 h-[1px] rounded-full w-full"></div>
    <div class="flex flex-col">
      <div class="text-xl font-bold w-full leading-10 text-oxford">Dark mode</div>
      <div class="text-xs font-medium w-full leading-5 -mt-2 text-slate-500">Lorem ipsum dolor sit amet consectetur
        adipisicing elit.</div>
      <v-switch v-model="settingStore.darkMode" hide-details inset color="#28B0A6"
        :label="`Dark mode: ${settingStore.darkMode ? 'On' : 'Off'}`"></v-switch>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSettingStore } from '~/stores/SettingStore';


const settingStore = useSettingStore()



</script>

<style scoped></style>