<template>
  <div class="fixed top-0 inset-x-0 h-fit shadow-md  bg-white z-10 py-8">
    <div class="container flex items-center gap-24">
      <nuxt-link to="/">
        <h1 class="text-3xl font-semibold text-oxford">TimberWolf</h1>
      </nuxt-link>
      <div class="flex gap-12 items-center flex-grow">
        <NuxtLink to="/" class="font-medium text-xl text-oxford hover:text-seagreen transition-all duration-200">Home
        </NuxtLink>
        <NuxtLink to="/toures" class="font-medium text-xl text-oxford hover:text-seagreen transition-all duration-200">
          Toures</NuxtLink>
        <NuxtLink to="/" class="font-medium text-xl text-oxford hover:text-seagreen transition-all duration-200">FAQ
        </NuxtLink>
        <NuxtLink to="/" class="font-medium text-xl text-oxford hover:text-seagreen  duration-200">Specials
        </NuxtLink>
        <v-btn variant="text" icon="mdi-magnify" class="-ml-4 " style="color: #1D293F"></v-btn>
      </div>
      <div class="flex gap-5">
        <v-btn rounded="xl" class="tracking-tight text" variant="text" size="large"
          style="text-transform: none; font-size: 20px !important;">Log in</v-btn>
        <v-btn color="#28B0A6" class="text-white tracking-tight" variant="flat" size="large" rounded="xl"
          style="text-transform: none; font-size: 20px !important;">Sign
          up</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>