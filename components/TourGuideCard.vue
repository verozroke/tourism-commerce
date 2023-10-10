<template>
  <div class="min-w-[1350px] flex items-center gap-8">
    <div class="bg-center bg-cover bg-no-repeat relative w-[512px] h-[470px] rounded-3xl"
      :style="{ backgroundImage: `url(${imageUrl})` }">
      <div
        class="w-16 h-16 text-2xl tracking-tighter text-oxford rounded-ss-none rounded-ee-none rounded-3xl bg-white absolute -bottom-[1px] -left-[1px] flex items-center justify-center">
        {{ '0' + index }}
      </div>
    </div>
    <div class="flex flex-col">
      <div class="text-2xl tracking-tight text-seagreen mb-2">Adventure Guru</div>
      <div class="text-4xl text-oxford font-medium tracking-tight mb-12">{{ fullname }}</div>
      <div class="mb-24 flex gap-16">
        <div>
          <div class="text-2xl text-oxford  tracking-tight mb-2">About</div>
          <div class="text-base tracking-wide text-slate-500 max-w-[342px]">{{ about }}</div>
        </div>
        <div>
          <div class="text-2xl text-oxford  tracking-tight mb-2">Journey</div>
          <div class="text-base tracking-wide text-slate-500 max-w-[342px]">{{ journey }}</div>
        </div>
      </div>
      <div class="flex gap-8 items-center">
        <a :href="facebookLink" class="text-lg text-oxford hover:text-seagreen transition">Facebook</a>
        <a :href="instagramLink" class="text-lg text-oxford hover:text-seagreen transition">Instagram</a>
        <a :href="twitterLink" class="text-lg text-oxford hover:text-seagreen transition">Twitter</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TourGuide } from '~/stores/TourStore';



const props = defineProps<{
  tourGuide: TourGuide,
  index: number
}>()

const {
  fullname,
  about,
  journey,
  imageUrl,
  facebookLink,
  instagramLink,
  twitterLink
} = props.tourGuide

</script>

<style scoped></style>