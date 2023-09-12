<template>
  <div>
    <Navbar />
    <NuxtPage v-slot="{ Component }">
      <transition name="routering" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </NuxtPage>
  </div>
</template>


<script lang="ts" setup>
import { register } from 'swiper/element/bundle';
register();
</script>


<style>
.routering-enter-from {
  opacity: 0;
  transform: translateX(1000px);
}


.routering-enter-active {
  transition: all 0.3s ease-out;
}

.routering-leave-to {
  opacity: 0;
  transform: translateX(-1000px);
}

.routering-leave-active {
  transition: all 0.3s ease-in;
}
</style>
