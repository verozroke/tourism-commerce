<template>
  <div v-ripple class="flex items-center text-white w-full rounded-2xl p-4 gap-4 card" style="border: 1px solid #E9ECEF">
    <div class="w-8 h-8 flex items-center justify-center">
      <img :src="icon" class="w-8 h-8" alt="">
    </div>
    <div class="tracking-wide leading-normal font-medium text-sm text-seagreen">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  icon: string
  text: string
}>()

</script>

<style scoped>
.card {
  transition: .2s;

}

.card:hover {
  background-color: #28B0A6;
  border: 1px solid #28B0A6;
  transition: .2s;
}

.card:hover .text-sm {
  color: white !important;
  transition: .2s;
}

.card:hover img {
  filter: brightness(1000%);
  transition: .2s;
}
</style>