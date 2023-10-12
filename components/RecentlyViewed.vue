<template>
  <div v-if="recentlyViewed.length > 0" class="flex flex-col overflow-hidden container px-0">
    <CarouselButtonRow title="Recently Viewed" :move-callbacks="[leftMove, rightMove]"
      subtitle="Sost Brilliant reasons Entrada should be your one-stop-shop!" />
    <div class="flex transition duration-300 ease-in-out  recent-item justify-start items-center  mt-16 gap-8">
      <div v-for="item in recentlyViewed" class="flex-col flex min-w-[445px] gap-2 items-center ">
        <div :style="{ backgroundImage: `url(${item.images[0].imageUrl})` }"
          class="relative rounded-[32px] h-80 w-full bg-center bg-no-repeat bg-cover">
          <div @click="() => router.push(`/toure/${item.id}`)" v-ripple
            class="backdrop-brightness-50 overflow-hidden overlay text-white absolute inset-0 rounded-[32px] flex flex-col justify-between p-8">
            <div class="flex w-full justify-end"><v-chip variant="elevated" color="#F5A623" class="px-4"
                style="width: fit-content;">{{ item.rate }}</v-chip></div>
            <div class="flex flex-col info opacity-0">
              <span class="text-lg font-light leading-normal text-white">{{ item.duration.name }}</span>
              <div class="flex items-center">
                <span
                  class="font-semibold flex-1 tracking-tight text-3xl text-white leading-normal underline underline-offset-4">
                  $ {{ item.price }}
                </span>
                <v-btn @click="() => copyToureLink(item.id)" icon="mdi-share-variant" class="text-oxford mr-4"
                  size="small"></v-btn>
                <v-btn class="text-white px-6" rounded="xl" @click="() => router.push(`/toure/${item.id}`)"
                  style="text-transform: none; font-weight: 400; font-size: 18px;" color="#28B0A6">Explore</v-btn>
              </div>
            </div>
          </div>
        </div>
        <div class=" text-center text-2xl text-oxford font-medium tracking-tight leading-normal">{{ item.title }}
        </div>
        <div class="text-base text-center text-slate-500 w-4/5 -mt-1 tracking-wide leading-normal">{{ item.location }}
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '~/hooks/use-toast';
import type { TourInfo } from '~/types/tour';

const currentSlide = ref<number>(0)


const router = useRouter()
const { toast } = useToast()

const copyToureLink = (id: string) => {
  const link = `${window.origin}/toure/${id}`
  navigator.clipboard.writeText(link);
  toast.copied({ message: 'URL Copied successfully' })
}

const leftMove = () => {
  const recentItemRow: HTMLElement = document.getElementsByClassName('recent-item')[0] as HTMLElement
  if (currentSlide.value === 0) {
    currentSlide.value = 1
  } else {
    currentSlide.value = currentSlide.value - 1
  }


  recentItemRow.style.transform = `translateX(-${currentSlide.value * 1432}px)`
  console.log(currentSlide.value);

}

const rightMove = () => {
  const recentItemRow: HTMLElement = document.getElementsByClassName('recent-item')[0] as HTMLElement
  if (currentSlide.value === Math.floor(recentlyViewed.value.length / 3)) {
    currentSlide.value = currentSlide.value - 1
  } else {
    currentSlide.value = currentSlide.value + 1
  }

  recentItemRow.style.transform = `translateX(-${currentSlide.value * 1432}px)`

  console.log(currentSlide.value);

}


const recentlyViewed = ref<TourInfo[]>([])

onMounted(() => {
  const recentLocalStorage = localStorage.getItem('recentlyViewed') || ''
  recentlyViewed.value = recentLocalStorage ? JSON.parse(recentLocalStorage) : []
})

</script>

<style scoped>
.overlay:hover .info {
  transform: translateY(0);
  opacity: 1;
  filter: blur(0);
  transition: .2s;
}

.overlay {
  transition: .2s;

}

.info {
  filter: blur(10px);
  transform: translateY(100px);
}

.overlay:hover {
  backdrop-filter: brightness(100%);
  transition: .2s;
}
</style>