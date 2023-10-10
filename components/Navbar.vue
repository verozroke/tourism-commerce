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
        <v-btn variant="text" icon="mdi-magnify" @click="() => {
          searchStore.dialog = true
        }" class="-ml-4" style="color: #1D293F"></v-btn>
      </div>
      <div v-if="!userStore.user" class="flex gap-5">
        <v-btn rounded="xl" @click="() => router.push('/login')" class="tracking-tight text" variant="text" size="large"
          style="text-transform: none; font-size: 20px !important;">Log in</v-btn>
        <v-btn color="#28B0A6" @click="() => router.push('/register')" class="text-white tracking-tight" variant="flat"
          size="large" rounded="xl" style="text-transform: none; font-size: 20px !important;">Sign
          up</v-btn>
      </div>
      <UserAvatar v-if="userStore.user" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/UserStore';
import { useSearchStore } from '~/stores/SearchStore';

const router = useRouter()

const userStore = useUserStore()
const searchStore = useSearchStore()

</script>

<style scoped></style>