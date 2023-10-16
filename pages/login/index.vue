<template>
  <div class="absolute inset-0 py-28">
    <div class="flex items-center justify-center flex-col gap-5" style="height: calc(100vh - 112px);">
      <div class="flex justify-start min-w-[400px]">
        <HomeButton />
      </div>
      <div class="flex flex-col bg-gray-100 px-6 py-10 rounded-lg gap-2 min-w-[400px] max-h-[560px]">
        <div class="text-oxford text-4xl font-bold leading-[48px]">Sign in</div>
        <div class="text-xl text-slate-600 font-medium leading-5">Welcome back again!</div>
        <AuthLoginForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/UserStore';

useHead({
  title: "Sign In | Touri"
})

const userStore = useUserStore()

onMounted(async () => {
  window.scrollTo(0, 0)
  await userStore.fetchUser()

  if (userStore.user) {
    window.location.pathname = '/toures'
  }
})
</script>

<style ></style>