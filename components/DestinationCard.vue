<template>
  <div class="rounded-[32px] relative min-h-[335px] min-w-auto h-full relative"
    :style="{ backgroundImage: `url('${props.card.imageLink}')` }"
    :class="`${props.card.spanning} bg-center bg-no-repeat bg-cover`">
    <div v-ripple
      class="backdrop-brightness-75 text-white absolute inset-0 rounded-[32px] flex flex-col justify-between p-8">
      <v-chip variant="elevated" color="#F5A623" class="px-4" style="width: fit-content;">{{ rate }}</v-chip>
      <div>
        <h1 class="text-white text-2xl tracking-tight font-medium">{{ title }}</h1>
        <h3 class="text-white text-base tracking-wide">{{ category }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DestinationCard } from '@/types/destination';




const props = defineProps<{
  card: DestinationCard
}>()

const { title, imageLink, category, rate } = props.card

</script>

<style scoped></style>