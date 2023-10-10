<template>
  <div class="flex flex-col gap-16 py-20">
    <CarouselButtonRow title="Tour Guides" :moveCallbacks="[leftMove, rightMove]"
      subtitle="Sost Brilliant reasons Entrada should be your one-stop-shop!" />
    <TourGuidesCarousel />
  </div>
</template>

<script setup lang="ts">
import { useTourStore } from '~/stores/TourStore';


const currentSlide = ref<number>(0)

const tourStore = useTourStore()

const leftMove = () => {
  const tourGuidesRow: HTMLElement = document.getElementsByClassName('toure-guide-carousel')[0] as HTMLElement
  if (currentSlide.value === 0) {
    currentSlide.value = 1
  } else {
    currentSlide.value = currentSlide.value - 1
  }


  tourGuidesRow.style.transform = `translateX(-${currentSlide.value * 1420}px)`
  console.log(currentSlide.value);

}

const rightMove = () => {
  const tourGuidesRow: HTMLElement = document.getElementsByClassName('toure-guide-carousel')[0] as HTMLElement
  if (currentSlide.value === tourStore.guides.length - 1) {
    currentSlide.value = currentSlide.value - 1
  } else {
    currentSlide.value = currentSlide.value + 1
  }

  tourGuidesRow.style.transform = `translateX(-${currentSlide.value * 1420}px)`

  console.log(currentSlide.value);

}

</script>

<style scoped></style>