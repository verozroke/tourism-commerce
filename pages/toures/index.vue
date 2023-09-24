<template>
  <div class="absolute inset-0 py-28">
    <div class="container py-10  flex flex-col gap-10 w-full px-0">
      <div class="flex p-6 gap-3 items-center rounded-[20px]" style="border: 1px solid #E9ECEF">
        <span class="text-black flex-grow leading-5 text-lg font-medium">Showing 1 - 10 of 2037 results for
          “cultural”</span>
        <span class="text-slate-500 leading-5">Sort by:</span>
        <div class="w-[150px]">
          <v-select density="compact" :hide-details="true" value="Georgia"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']" variant="outlined"
            style="box-shadow: none; !important"></v-select>
        </div>
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
          <TourCard v-for="tour in tourInfos" :key="tour.id" :tour-info="tour" />
        </div>
      </div>
    </div>

  </div>
</template> 

<script setup lang="ts">
import axios from 'axios'
import { TourInfo, rangeValue } from '~/types/tour';


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

const tourInfos = ref<TourInfo[]>([
  {
    id: '1',
    location: 'Manyara | Lake Eyasi | Ngorongoro | Serengeti visit Village',
    duration: '8 Days',
    price: 2080,
    rate: 4.7,
    title: 'Tetema Tour',
    rateAmount: 108,
    imageUrl: 'https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2108&q=80',
  },
  {
    id: '2',
    location: 'Manyara | Lake Eyasi | Ngorongoro | Serengeti',
    duration: '7 Days',
    price: 1820,
    rate: 4.7,
    title: 'Pamoja Tour',
    rateAmount: 108,
    imageUrl: 'https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',

  },
  {
    id: '3',
    location: 'Tarangire | Lake Manyara | Serengeti Ngorongoro Crater',
    duration: '6 Days',
    price: 1560,
    rate: 4.7,
    title: 'Rose Tour',
    rateAmount: 108,
    imageUrl: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80',

  },
  {
    id: '4',
    location: 'Lake Manyara | Serengeti | Ngorongoro Crater',
    duration: '5 Days',
    price: 1300,
    rate: 4.7,
    title: 'Ansi Tour',
    rateAmount: 108,
    imageUrl: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',

  },
  {
    id: '5',
    location: 'Lake Manyara | Serengeti | Ngorongoro Crater',
    duration: '4 Days',
    price: 1040,
    rate: 4.7,
    title: 'Lina Tour',
    rateAmount: 108,
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80',

  },
  {
    id: '6',
    location: 'Tarangire | Ngorongoro Crater | Lake Manyara',
    duration: '3 Days',
    price: 750,
    rate: 4.7,
    title: 'Sharma Tour ',
    rateAmount: 108,
    imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',

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


const getCards = async () => {
  try {
    const { data } = await axios.get('/tours')

    tourInfos.value = data
  } catch (err) {
    console.log(err)
  }
}

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
</style>