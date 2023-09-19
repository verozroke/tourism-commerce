<template>
  <div class="flex flex-col">
    <Navbar />
    <NuxtPage>
    </NuxtPage>
  </div>
</template>


<script lang="ts" setup>
import { register } from 'swiper/element/bundle';
register();
</script>


<style>
.page-enter-from {
  opacity: 0;
  transform: translateX(1000px);
}

.page-enter-active {
  filter: blur(2px);
  transition: all 0.3s ease-out;
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-1000px);
}

.page-leave-active {
  filter: blur(2px);
  transition: all 0.3s ease-in;
}
</style>
