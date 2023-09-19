<template>
  <div class="flex container items-center w-full justify-between p-0">
    <div class="flex flex-col gap-4">
      <h1 class="font-bold text-4xl  tracking-tight">{{ title }}</h1>
      <div class="text-2xl text-oxford opacity-70 "> {{ subtitle }}</div>
    </div>
    <div class="flex gap-4">
      <v-btn variant="outlined" color="#546179" icon="mdi-chevron-left"></v-btn>
      <v-btn icon="mdi-chevron-right" class="text-white" color="#28B0A6"></v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">



defineProps<{
  title: string
  subtitle: string
}>()
</script>

<style scoped></style>