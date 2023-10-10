import { defineStore } from 'pinia';
import { useToast } from '~/hooks/use-toast';
import tourService, { queryParams } from '~/services/tour.service';
import { TourInfo, TagOption, DurationOption, AgeGroupOption, SpecialOption, SortByOption } from '~/types/tour';
import tourGuideService from '~/services/tour-guide.service'
import { DestinationCard } from '~/types/destination';


export type rangeValue = [minPrice: number, maxPrice: number]

export type TourGuide = {
  id: string
  fullname: string
  about: string
  journey: string
  facebookLink: string
  instagramLink: string
  twitterLink: string
  imageUrl: string
}

export const useTourStore = defineStore('tourStore', () => {
  const tourInfos = ref<TourInfo[]>([])

  const { toast } = useToast()


  // sorting
  const sortBy = ref<SortByOption>('Rating')
  const desc = ref<boolean>(false)
  const tags = ref<TagOption[]>([])
  const durations = ref<DurationOption[]>([])
  const ageGroups = ref<AgeGroupOption[]>([])
  const specials = ref<SpecialOption[]>([])

  const fromDate = ref<string>('')
  const toDate = ref<string>('')

  const tourInfosLoading = ref<boolean>(false)

  const featuredTours = ref<TourInfo[]>([])

  const getTourInfos = async () => {
    try {
      const query: queryParams = {
        sortBy: sortBy.value,
        desc: desc.value,
        priceRange: priceSliderValue.value,
        ageGroups: ageGroups.value,
        dateRange: [fromDate.value.toString(), toDate.value.toString()],
        durations: durations.value,
        specials: specials.value,
        tags: tags.value
      }

      tourInfosLoading.value = true
      const data: TourInfo[] = await tourService.getTourInfos(query)
      tourInfos.value = data
      // on success
      tourInfosLoading.value = false
    } catch (e) {
      // on error
      toast.error({ message: 'Couldn\'t get tours' })
    }
  }


  const getFeaturedTours = async () => {
    try {


      const data: TourInfo[] = await tourService.getFeaturedTours()
      featuredTours.value = data
      // on success
    } catch (error) {
      toast.error({ message: 'Couldn\'t get tours' })

    }
  }

  const setTourInfos = (value: TourInfo[]) => {
    tourInfos.value = value
  }

  const destinations = ref<TourInfo[]>([])


  const spannings = [
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-2',
    'col-span-2 row-span-2',
    'col-span-1 row-span-1',
    'col-span-3 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
  ]

  const destinationCards = computed<DestinationCard[]>(() => {

    const halfReadyDestinationCards = destinations.value.map(destination => ({
      id: destination.id,
      title: destination.title,
      spanning: '',
      category: destination.location,
      rate: destination.rate,
      imageLink: destination.imageUrl
    }))

    halfReadyDestinationCards.forEach((destinationCard, index) => {
      console.log(spannings[index]);

      destinationCard.spanning = spannings[index]
    })

    return halfReadyDestinationCards
  })

  const getTopDestinations = async () => {
    try {
      const fetchedDestinations = await tourService.getTopDestinations()

      // on success
      destinations.value = fetchedDestinations
    } catch (error) {
      // on error

      toast.error({ message: 'Couldn\'t fetch top destinations' })
    }
  }


  const guides = ref<TourGuide[]>([])

  const getTourGuides = async () => {
    try {

      const fetchedGuides: TourGuide[] = await tourGuideService.getTourGuides()

      // on success
      guides.value = fetchedGuides

    } catch (e) {
      // on error

      toast.error({ message: 'Couldn\'t fetch guides' })
    }
  }



  // filter by price
  const priceSliderValue = ref<rangeValue>([0, 7500])


  const minRangeWithDollar = computed(() => `$ ${priceSliderValue.value[0]}`)
  const maxRangeWithDollar = computed(() => `$ ${priceSliderValue.value[1]}`)


  const getTourInfosWithDebounce = debounce(getTourInfos, 300)





  return {
    tourInfos,
    setTourInfos,
    getTourInfos,
    getTourInfosWithDebounce,
    tourInfosLoading,
    maxRangeWithDollar,
    featuredTours,
    priceSliderValue,
    minRangeWithDollar,
    getFeaturedTours,
    tags,
    guides,
    getTourGuides,
    destinations,
    getTopDestinations,
    durations,
    ageGroups,
    specials,
    fromDate,
    toDate,
    sortBy,
    desc,
    destinationCards
  }
});
