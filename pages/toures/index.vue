<template>
  <div class="absolute inset-0 py-28">
    <div class="container py-10  flex flex-col gap-10 w-full px-0">
      <div class="flex p-6 gap-3 items-center rounded-[20px]" style="border: 1px solid #E9ECEF">
        <span class="text-oxford flex-grow leading-5 text-lg font-medium">Showing 1 - {{ tourStore.pagesLength }} of {{
          tourStore.resultsLength }}
          results shown.</span>
        <span class="text-slate-500 leading-5">Sort by:</span>
        <div class="w-[150px]">
          <v-select density="compact" :hide-details="true" color="#28B0A6" @update:menu="(value) => {
            if (value) {
              return
            }

            tourStore.getTourInfos()
          }" v-model="tourStore.sortBy" :items="['Rating', 'Relevance', 'Price', 'Title']" variant="outlined"
            style="box-shadow: none; !important"></v-select>
        </div>
        <v-btn :icon="tourStore.desc ? 'mdi-sort-alphabetical-descending' : 'mdi-sort-alphabetical-ascending'" @click="() => {
          tourStore.desc = !tourStore.desc
          tourStore.getTourInfos()
        }" color="#28B0A6" class="text-white" size="small"></v-btn>
      </div>
      <div class="grid gap-x-8 grid-cols-6">
        <FilterMiniCard v-for="filterMini in filterMinis" :key="filterMini.id" :icon="filterMini.icon"
          :text="(filterMini.text as SpecialOption)" />
      </div>
      <div class="flex gap-20">
        <div class="flex flex-col w-[424px] h-fit py-8 px-12 bg-white rounded-2xl" style="border: 1px solid #E9ECEF">
          <span class="text-slate-500 text-base font-medium leading-5 mb-3">When are you traveling?</span>
          <div class="text-oxford tracking-wide mb-2">From:</div>
          <div class="relative h-12 rounded-md w-full mb-8">
            <input @change="() => {
              tourStore.getTourInfosWithDebounce()
              tourStore.getTourLength()
            }" v-model="tourStore.fromDate" type="date" class="w-full px-4 h-full"
              style="border-radius: 8px; border: 1px solid #DCE5EB;">
          </div>
          <div class="text-oxford -mt-4 tracking-wide mb-2">Until:</div>
          <div class="relative h-12 rounded-md w-full mb-8">
            <input @change="() => {
              tourStore.getTourInfosWithDebounce()
              tourStore.getTourLength()
            }" v-model="tourStore.toDate" type="date" class="w-full px-4 h-full"
              style="border-radius: 8px; border: 1px solid #DCE5EB;">
          </div>
          <span class="text-slate-500 text-base font-medium leading-5 mt-3 mb-4">Popular tags</span>
          <div class="flex-col flex">
            <v-checkbox @change="async () => {
              await tourStore.getTourInfos()
              tourStore.getTourLength()
            }" hide-details="auto" class="-mt-2 -ml-2.5 text-oxford tracking-wide" :value="tagName"
              v-model="tourStore.tags" v-for="tagName in popularTags" :key="tagName" :label="tagName"
              color="#28B0A6"></v-checkbox>
          </div>
          <span class="text-slate-500 text-base font-medium leading-5 mt-3 mb-4">Price Range</span>
          <div class="flex flex-col gap-5 mb-4">
            <v-range-slider color="#28B0A6" :min="250" :max="7500" @update:model-value="() => {
              tourStore.getTourInfosWithDebounce()
              tourStore.getTourLength()
            }" v-model="tourStore.priceSliderValue" step="50"></v-range-slider>
            <div class="flex gap-2 items-center">
              <v-text-field hide-details="auto" class="w-36" density="compact" v-model="tourStore.minRangeWithDollar"
                color="#28B0A6" placeholder="$ 250" variant="outlined"></v-text-field>
              <div class="h-[2px] w-2 bg-black"></div>
              <v-text-field hide-details="auto" class="w-36" density="compact" v-model="tourStore.maxRangeWithDollar"
                color="#28B0A6" placeholder="$ 7500" variant="outlined"></v-text-field>
            </div>
          </div>
          <span class="text-slate-500 text-base font-medium leading-5 mt-3 mb-4">Duration</span>
          <div class="flex-col flex">
            <v-checkbox @change="async () => {
              await tourStore.getTourInfos()
              tourStore.getTourLength()
            }" hide-details="auto" class="-mt-2 -ml-2.5 text-oxford tracking-wide" v-for="duration in durationLabels"
              :value="duration" v-model="tourStore.durations" :key="duration" :label="duration"
              color="#28B0A6"></v-checkbox>
          </div>
          <span class="text-slate-500 text-base font-medium leading-5 mt-3 mb-4">Age Group</span>
          <div class="flex-col flex">
            <v-checkbox @change="async () => {
              await tourStore.getTourInfos()
              tourStore.getTourLength()
            }" hide-details="auto" class="-mt-2 -ml-2.5 text-oxford tracking-wide" v-for="age in ageGroups" :key="age"
              :label="age" :value="age" v-model="tourStore.ageGroups" color="#28B0A6"></v-checkbox>
          </div>
          <span class="text-slate-500 text-base font-medium leading-5 mt-3 mb-4">Specials</span>
          <div class="flex-col flex">
            <v-checkbox @change="async () => {
              await tourStore.getTourInfos()
              tourStore.getTourLength()
            }" hide-details="auto" class="-mt-2 -ml-2.5 text-oxford tracking-wide" v-for="speacial in specialsLabels"
              :value="speacial" v-model="tourStore.specials" :key="speacial" :label="speacial"
              color="#28B0A6"></v-checkbox>

          </div>
        </div>
        <div class="flex flex-col justify-center items-center h-fit w-full gap-5">
          <!--   -->
          <UiLoader v-if="tourStore.tourInfosLoading" />
          <div class="grid  flex-grow h-auto grid-cols-2 gap-y-8 min-h-[600px] gap-x-8">
            <!--  -->
            <TourCard @click="() => router.push(`/toure/${tour.id}`)" v-if="!tourStore.tourInfosLoading"
              v-for="tour in tourStore.tourInfos" :key="tour.id" :tour-info="tour" />
          </div>
          <PaginationArrows class="w-full" />
        </div>
      </div>

      <RecentlyViewed />
    </div>
    <Footer />
  </div>
</template> 

<script setup lang="ts">
import { useTourStore } from '~/stores/TourStore';
import { useUserStore } from '~/stores/UserStore';
import { SpecialOption } from '~/types/tour';



useHead({
  title: 'Toures | Touri'
})

const userStore = useUserStore()

const tourStore = useTourStore()

const router = useRouter()



const filterMinis = ref([
  {
    id: '1',
    icon: '/toures/icons/1.svg',
    text: 'Discounted deals',
  },
  {
    id: '2',
    icon: '/toures/icons/2.svg',
    text: 'Free Cancellations',
  },
  {
    id: '3',
    icon: '/toures/icons/3.svg',
    text: 'Entrada Specials',
  },
  {
    id: '5',
    icon: '/toures/icons/5.svg',
    text: 'Private Groups',
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








onMounted(async () => {
  window.scrollTo(0, 0)
  await userStore.fetchUser()
  if (!userStore.user) {
    window.location.pathname = '/login'
  }
  await tourStore.getTourInfos()
  await tourStore.getTourLength()
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