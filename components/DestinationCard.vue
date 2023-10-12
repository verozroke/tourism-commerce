<template>
  <div @click="() => router.push(`/toure/${id}`)"
    :style="{ backgroundImage: `url('${imageLink}')`, gridColumn: `span ${spanning.split(' ')[0]} / span ${spanning.split(' ')[0]}` }"
    :class="`rounded-[32px] min-h-[385px] min-w-auto h-full relative  ${spanning.split(' ')[1]}  bg-center bg-no-repeat bg-cover`">
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
import type { DestinationCard } from '@/types/client';

const router = useRouter()

const props = defineProps<{
  card: DestinationCard
}>()

const { title, imageLink, category, rate, id, spanning } = toRefs(props).card.value

</script>

<style scoped></style>