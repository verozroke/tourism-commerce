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


const userStore = useUserStore()

onMounted(async () => {
  await userStore.fetchUser()

})


</script>

<style scoped></style>