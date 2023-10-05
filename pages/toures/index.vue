<template>
  <div class="absolute inset-0 py-28">
    <div class="container py-10  flex flex-col gap-10 w-full px-0">
      <div class="flex p-6 gap-3 items-center rounded-[20px]" style="border: 1px solid #E9ECEF">
        <span class="text-black flex-grow leading-5 text-lg font-medium">Showing 1 - 10 of 2037 results for
          “cultural”</span>
        <span class="text-slate-500 leading-5">Sort by:</span>
        <div class="w-[150px]">
          <v-select density="compact" :hide-details="true" color="#28B0A6" value="Rating"
            :items="['Rating', 'Relevance', 'Price', 'Title']" variant="outlined"
            style="box-shadow: none; !important"></v-select>
        </div>
        <v-btn icon="mdi-sort-variant" color="#28B0A6" class="text-white" size="small">

        </v-btn>
      </div>
      <div class="grid gap-x-8 grid-cols-6">
        <FilterMiniCard v-for="filterMini in filterMinis" :key="filterMini.id" :icon="filterMini.icon"
          :text="filterMini.text" />
      </div>
      <div class="flex gap-20">
        <div class="flex flex-col w-[424px] h-fit py-8 px-12 bg-white rounded-2xl" style="border: 1px solid #E9ECEF">
          <span class="text-slate-500 text-base font-medium leading-5 mb-3">When are you traveling?</span>
          <div class="relative h-12 rounded-md w-full mb-8">

            <input type="date" class="w-full px-4 h-full" style="border-radius: 8px; border: 1px solid #DCE5EB;">
          </div>
          <span class="text-slate-500 text-base font-medium leading-5 mt-3 mb-4">Popular tags</span>
          <div class="flex-col flex">
            <v-checkbox hide-details="auto" class="-mt-2 -ml-2.5 text-black tracking-wide" v-for="tagName in popularTags"
              :key="tagName" :label="tagName" color="#28B0A6"></v-checkbox>
          </div>
          <span class="text-slate-500 text-base font-medium leading-5 mt-3 mb-4">Price Range</span>
          <div class="flex flex-col gap-5 mb-4">
            <v-range-slider color="#28B0A6" :min="250" :max="7500" v-model="rangeSliderValue" step="50"></v-range-slider>
            <div class="flex gap-2 items-center">
              <v-text-field hide-details="auto" class="w-36" density="compact" v-model="minRangeWithDollar"
                color="#28B0A6" placeholder="$ 250" variant="outlined"></v-text-field>
              <div class="h-[2px] w-2 bg-black"></div>
              <v-text-field hide-details="auto" class="w-36" density="compact" v-model="maxRangeWithDollar"
                color="#28B0A6" placeholder="$ 7500" variant="outlined"></v-text-field>
            </div>
          </div>
          <span class="text-slate-500 text-base font-medium leading-5 mt-3 mb-4">Duration</span>
          <div class="flex-col flex">
            <v-checkbox hide-details="auto" class="-mt-2 -ml-2.5 text-black tracking-wide"
              v-for="duration in durationLabels" :key="duration" :label="duration" color="#28B0A6"></v-checkbox>
          </div>
          <span class="text-slate-500 text-base font-medium leading-5 mt-3 mb-4">Age Group</span>
          <div class="flex-col flex">
            <v-checkbox hide-details="auto" class="-mt-2 -ml-2.5 text-black tracking-wide" v-for="age in ageGroups"
              :key="age" :label="age" color="#28B0A6"></v-checkbox>
          </div>
          <span class="text-slate-500 text-base font-medium leading-5 mt-3 mb-4">Specials</span>
          <div class="flex-col flex">
            <v-checkbox hide-details="auto" class="-mt-2 -ml-2.5 text-black tracking-wide"
              v-for="speacials in specialsLabels" :key="speacials" :label="speacials" color="#28B0A6"></v-checkbox>

          </div>
        </div>
        <div class="grid flex-grow grid-cols-2 gap-y-8 gap-x-8">
          <span v-if="tourStore.tourInfosLoading">Loading...</span>
          <TourCard @click="() => router.push(`/toure/${tour.id}`)" v-if="!tourStore.tourInfosLoading"
            v-for="tour in tourStore.tourInfos" :key="tour.id" :tour-info="tour" />
        </div>
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
    </div>
    <Footer />
  </div>
</template> 

<script setup lang="ts">
import { useTourStore } from '~/stores/TourStore';
import { useUserStore } from '~/stores/UserStore';
import { rangeValue } from '~/types/tour';

const userStore = useUserStore()

const tourStore = useTourStore()

const router = useRouter()


const filterMinis = ref([
  {
    id: '1',
    icon: '/toures/icons/1.svg',
    text: 'Discounted Deals',
  },
  {
    id: '2',
    icon: '/toures/icons/2.svg',
    text: 'Free Cancellation',
  },
  {
    id: '3',
    icon: '/toures/icons/3.svg',
    text: 'Entrada Specials',
  },
  {
    id: '4',
    icon: '/toures/icons/4.svg',
    text: 'Few Seats Left',
  },
  {
    id: '5',
    icon: '/toures/icons/5.svg',
    text: 'Private Tours',
  },
  {
    id: '6',
    icon: '/toures/icons/6.svg',
    text: 'New on Entrada',
  },
])





const popularTags = ref([
  'Child Friendly',
  'Taking extra precautions',
  'Away from the chaos',
  'Epic Challenges',
  'Virtual Experiences',
])

const durationLabels = ref([
  'Upto 1 Hour',
  '1 to 4 Hours',
  '4 Hours to 1 Day',
  '1 to 3 Days',
  '3 Days or More',
])

const ageGroups = ref([
  '1 & Up',
  '3 & Up',
  '7 & Up',
  '13 & Up',
  '18 & Up',
])

const specialsLabels = ref([
  'Discounted deals',
  'Free Cancellations',
  'Private Groups',
  'New on Entrada',
  'Entrada Specials',

])


const rangeSliderValue = ref<rangeValue[]>([1500, 5000])

const minRangeWithDollar = computed(() => `$ ${rangeSliderValue.value[0]}`)
const maxRangeWithDollar = computed(() => `$ ${rangeSliderValue.value[1]}`)





onMounted(async () => {
  await userStore.fetchUser()

  if (!userStore.user) {
    window.location.pathname = '/login'
  }

  await tourStore.getTourInfos()
})

</script>

<style>
.v-label {
  color: #000 !important;
  opacity: 1;
}

input[type='date']::-webkit-calendar-picker-indicator {
  background:
    transparent;
  bottom: 0;
  color: transparent;
  cursor: pointer;
  height: auto;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
}


.overlay:hover .info {
  opacity: 1;
  transition: .3s;
}

.info {
  transition: .3s;
}
</style>