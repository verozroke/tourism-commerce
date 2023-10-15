<template>
  <div class="absolute inset-0 py-28">
    <div class="container px-24 py-5 flex flex-col justify-center items-center">
      <div class="text-5xl font-bold w-full mt-4 leading-normal text-oxford">Your toures</div>
      <div class="text-base font-medium w-full leading-10 text-slate-500">Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Nostrum quasi odio ab facilis, exercitationem iure?
      </div>
      <MyToureFavourites />
      <MyTourePending />
      <MyToureClosed />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useMyToureStore } from '~/stores/MyToureStore';
import { useUserStore } from '~/stores/UserStore';

const userStore = useUserStore()
const myToureStore = useMyToureStore()

useHead({
  title: "My Toures | Touri"
})

onMounted(async () => {
  window.scrollTo(0, 0)

  await userStore.fetchUser()
  if (!userStore.user) {
    window.location.pathname = '/login'
  }

  await myToureStore.getFavorites()
  await myToureStore.getPendings()
  await myToureStore.getCloseds()
})

</script>

<style scoped></style>