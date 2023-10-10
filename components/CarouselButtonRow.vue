<template>
  <div class="flex container items-center w-full justify-between p-0">
    <div class="flex flex-col gap-4">
      <h1 class="font-bold text-4xl  tracking-tight">{{ title }}</h1>
      <div class="text-2xl text-oxford opacity-70 "> {{ subtitle }}</div>
    </div>
    <div v-if="!hide" class="flex gap-4">
      <v-btn @click="() => {
        if (leftMove) {
          leftMove()
        }
      }" variant="outlined" color="#546179" icon="mdi-chevron-left"></v-btn>
      <v-btn @click="() => {
        if (rightMove) {
          rightMove()
        }
      }" icon="mdi-chevron-right" class="text-white" color="#28B0A6"></v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">



const props = defineProps<{
  moveCallbacks?: [leftMove: () => void, rightMove: () => void]
  title: string
  subtitle: string
  hide?: boolean
}>()

const leftMove = props.moveCallbacks ? props.moveCallbacks[0] : () => { }
const rightMove = props.moveCallbacks ? props.moveCallbacks[1] : () => { }


</script>

<style scoped></style>