<template>
  <div class="absolute inset-0 py-28">
    <HomeText />
    <HomeFeaturedToures />
    <HomeDestination />
    <HomeTourGuides />
    <HomeCheckAll />
    <HomeSubscribe />
    <HomeLogos />
    <HomeContactUs class="flex-grow" />
    <Footer />

  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/UserStore';


useHead({
  title: 'Home | Touri'
})


const userStore = useUserStore()

onMounted(async () => {
  window.scrollTo(0, 0)
  await userStore.fetchUser()
})


</script>

<style scoped></style>