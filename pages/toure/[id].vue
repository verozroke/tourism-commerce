<template>
  <div class="absolute inset-0 py-28">
    <div class="container py-10  flex flex-col gap-10 w-full px-0">
      <ToureCarousel :carousel-items="carouselItems" />
      <div class="flex justify-between py-5">
        <div class="w-[784px] flex flex-col">
          <ToureInfo />
          <div class="flex bg-slate-300 mt-4 mb-8 h-[1px] rounded-full w-full"></div>
          <ToureTabs />
        </div>
        <ToureForm />
      </div>
      <CarouselButtonRow title="Recently Viewed"
        subtitle="Sost Brilliant reasons Entrada should be your one-stop-shop!" />
      <div class="flex justify-between items-center w-full mt-16 gap-8">
        <div class="flex-col flex w-1/3 gap-4 items-center ">
          <div
            class="relative rounded-[32px] bg-[url(https://images.unsplash.com/photo-1603705356887-0c1a1927ea7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] h-80 w-full bg-center bg-no-repeat bg-cover">
            <div v-ripple
              class="backdrop-brightness-75 overlay text-white absolute inset-0 rounded-[32px] flex flex-col justify-between p-8">
              <div class="flex w-full justify-end"><v-chip variant="elevated" color="#F5A623" class="px-4"
                  style="width: fit-content;">30%</v-chip></div>
              <div class="flex flex-col info opacity-0">
                <span class="text-lg font-light leading-normal text-white">10 Days | 09 Night</span>
                <div class="flex items-center">
                  <span
                    class="font-semibold flex-1 tracking-tight text-3xl text-white leading-normal underline underline-offset-4">
                    $895.50
                  </span>
                  <v-btn icon="mdi-share-variant" class="text-oxford mr-4" size="small"></v-btn>
                  <v-btn class="text-white px-6" rounded="xl"
                    style="text-transform: none; font-weight: 400; font-size: 18px;" color="#28B0A6">Explore</v-btn>
                </div>
              </div>

            </div>
          </div>
          <div class=" text-center text-2xl text-oxford font-medium tracking-tight leading-normal">Train Tour Skyline
          </div>
          <div class="text-base text-center text-slate-500 w-4/5 tracking-wide leading-normal">Check Out Daily Deals and
            Promotion
            on Hotels. Easy & Fast Booking</div>
        </div>
        <div class="flex-col flex w-1/3 gap-4 items-center ">
          <div
            class="relative rounded-[32px]  bg-[url(https://images.unsplash.com/photo-1603705356887-0c1a1927ea7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] h-80 w-full bg-center bg-no-repeat bg-cover">
            <div v-ripple
              class="backdrop-brightness-75 overlay text-white absolute inset-0 rounded-[32px] flex flex-col justify-between p-8">
              <!-- <v-chip variant="elevated" color="#F5A623" class="px-4" style="width: fit-content;">30%</v-chip> -->
              <div class="flex w-full justify-end"><v-chip variant="elevated" color="#F5A623" class="px-4"
                  style="width: fit-content;">30%</v-chip></div>
              <div class="flex flex-col info opacity-0">
                <span class="text-lg font-light leading-normal text-white">10 Days | 09 Night</span>
                <div class="flex items-center">
                  <span
                    class="font-semibold flex-1 tracking-tight text-3xl text-white leading-normal underline underline-offset-4">
                    $895.50
                  </span>
                  <v-btn icon="mdi-share-variant" class="text-oxford mr-4" size="small"></v-btn>
                  <v-btn class="text-white px-6" rounded="xl"
                    style="text-transform: none; font-weight: 400; font-size: 18px;" color="#28B0A6">Explore</v-btn>
                </div>
              </div>
            </div>
          </div>
          <div class=" text-center text-2xl text-oxford font-medium tracking-tight leading-normal">Train Tour Skyline
          </div>
          <div class="text-base text-center text-slate-500 w-4/5 tracking-wide leading-normal">Check Out Daily Deals and
            Promotion
            on Hotels. Easy & Fast Booking</div>
        </div>
        <div class="flex-col flex w-1/3 gap-4 items-center ">
          <div
            class="relative image-overlay rounded-[32px] bg-[url(https://images.unsplash.com/photo-1603705356887-0c1a1927ea7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] h-80 w-full bg-center bg-no-repeat bg-cover">
            <div v-ripple
              class="backdrop-brightness-75 overlay text-white absolute inset-0 rounded-[32px] flex flex-col justify-between p-8">
              <!-- <v-chip variant="elevated" color="#F5A623" class="px-4" style="width: fit-content;">30%</v-chip> -->
              <div class="flex w-full justify-end"><v-chip variant="elevated" color="#F5A623" class="px-4"
                  style="width: fit-content;">30%</v-chip></div>
              <div class="flex flex-col info opacity-0">
                <span class="text-lg font-light leading-normal text-white">10 Days | 09 Night</span>
                <div class="flex items-center">
                  <span
                    class="font-semibold flex-1 tracking-tight text-3xl text-white leading-normal underline underline-offset-4">
                    $895.50
                  </span>
                  <v-btn icon="mdi-share-variant" class="text-oxford mr-4" size="small"></v-btn>
                  <v-btn class="text-white px-6" rounded="xl"
                    style="text-transform: none; font-weight: 400; font-size: 18px;" color="#28B0A6">Explore</v-btn>
                </div>
              </div>
            </div>
          </div>
          <div class=" text-center text-2xl text-oxford font-medium tracking-tight leading-normal">Train Tour Skyline
          </div>
          <div class="text-base text-center text-slate-500 w-4/5 tracking-wide leading-normal">Check Out Daily Deals and
            Promotion
            on Hotels. Easy & Fast Booking</div>
        </div>
      </div>
      <Footer />

    </div>
  </div>
</template>


<script lang="ts" setup>
import { CarouselItem } from '~/types/tour';



const carouselItems = ref<CarouselItem[]>([
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1614832359988-2e3aa24b4aba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1690394472903-23ce57cb5953?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1665689285360-2c67e6084d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1664388519335-c3752b51efda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1528159597562-ef0695254997?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
])

</script>


<style scoped>
.overlay:hover .info {
  opacity: 1;
  transition: .3s;
}

.info {
  transition: .3s;
}
</style>