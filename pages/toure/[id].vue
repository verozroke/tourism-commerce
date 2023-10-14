<template>
  <div class="absolute inset-0 py-28">
    <div class="container py-10  flex flex-col gap-10 w-full px-0">
      <ToureCarousel :carousel-items="tourDetailStore.tourInfo.images" />
      <div class="flex justify-between pb-5 -mt-4">
        <div class="w-[784px] flex flex-col">
          <ToureInfo />
          <div class="flex bg-slate-300 mt-4 mb-8 h-[1px] rounded-full w-full"></div>
          <ToureTabs />
        </div>
        <ToureForm />
      </div>
      <RecentlyViewed />
      <Footer />

    </div>
  </div>
</template>


<script lang="ts" setup>
import { useTourDetailStore } from '~/stores/TourDetailStore';
import { useUserStore } from '~/stores/UserStore';

const userStore = useUserStore()
const route = useRoute()
const tourDetailStore = useTourDetailStore()

// const carouselItems = ref<CarouselItem[]>([
//   {
//     id: '1',
//     src: 'https://images.unsplash.com/photo-1614832359988-2e3aa24b4aba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
//   },
//   {
//     id: '2',
//     src: 'https://images.unsplash.com/photo-1690394472903-23ce57cb5953?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80'
//   },
//   {
//     id: '3',
//     src: 'https://images.unsplash.com/photo-1665689285360-2c67e6084d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
//   },
//   {
//     id: '4',
//     src: 'https://images.unsplash.com/photo-1664388519335-c3752b51efda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
//   },
//   {
//     id: '5',
//     src: 'https://images.unsplash.com/photo-1528159597562-ef0695254997?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
//   },
// ])

onMounted(async () => {
  window.scrollTo(0, 0)
  await userStore.fetchUser()
  if (!userStore.user) {
    window.location.pathname = '/login'
  }

  await tourDetailStore.getTourInfoById(route.params.id as string)

  useHead({
    title: `${tourDetailStore.tourInfo.title} Tour | Touri`
  })
})

</script>


<style scoped>
.info {
  transition: .3s;
}
</style>