<template>
  <div class="flex flex-col">
    <!-- <VitePwaManifest /> -->
    <ToastProvider />
    <SearchProvider />
    <Navbar />
    <NuxtPage>
    </NuxtPage>
  </div>
</template>


<script lang="ts" setup>
import ToastProvider from './providers/ToastProvider.vue';
import SearchProvider from './providers/SearchProvider.vue';

// const config = useRuntimeConfig()

const overflow = computed(() => {
  if (window) {
    return window.location.pathname === '/login' || window.location.pathname === '/register' ? 'hidden' : 'auto'
  } else {
    return 'auto'
  }
})

// onMounted(() => {
//   console.log(config.app.BACKEND_URL)
// })
</script>


<style>
html,
body {
  overflow: v-bind(overflow);
}

::-webkit-scrollbar {
  width: 13px;
  background-color: transparent;
}


::-webkit-scrollbar-track {
  background-color: transparent;
  margin-block: .5em;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(47, 47, 47, 0.836);
  border-radius: 100vw;
  transition: .4s;
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
}

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
