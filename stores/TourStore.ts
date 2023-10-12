import { defineStore } from 'pinia';
import { useToast } from '~/hooks/use-toast';
import tourService, { type QueryParams, type TourLengthQueryParams } from '~/services/tour.service';
import type {
  TourInfo,
  TagOption,
  DurationOption,
  AgeGroupOption,
  SpecialOption,
  SortByOption,
  SliderValue
} from '~/types/tour';
import type {
  DestinationCard,
  TourGuide
} from '~/types/client';
import tourGuideService from '~/services/tour-guide.service'
import { LIMIT_TOURS_IN_PAGE, spannings } from '~/constants/constants';




export const useTourStore = defineStore('tourStore', () => {
  const { toast } = useToast()

  // Data
  const tourInfos = ref<TourInfo[]>([])
  const guides = ref<TourGuide[]>([])
  const tourInfosLoading = ref<boolean>(false)
  const featuredTours = ref<TourInfo[]>([])
  const destinations = ref<TourInfo[]>([])
  const destinationCards = computed<DestinationCard[]>(() => {
    const halfReadyDestinationCards = destinations.value.map(destination => ({
      id: destination.id,
      title: destination.title,
      spanning: '',
      category: destination.location,
      rate: destination.rate,
      imageLink: destination.images[0].imageUrl
    }))
    halfReadyDestinationCards.forEach((destinationCard, index) => {
      destinationCard.spanning = spannings[index]
    })

    return halfReadyDestinationCards
  })

  // Query Params for Filtering
  const sortBy = ref<SortByOption>('Rating')
  const desc = ref<boolean>(false)
  const tags = ref<TagOption[]>([])
  const durations = ref<DurationOption[]>([])
  const ageGroups = ref<AgeGroupOption[]>([])
  const specials = ref<SpecialOption[]>([])
  const fromDate = ref<string>('')
  const toDate = ref<string>('')
  const priceSliderValue = ref<SliderValue>([0, 7500])
  const minRangeWithDollar = computed(() => `$ ${priceSliderValue.value[0]}`)
  const maxRangeWithDollar = computed(() => `$ ${priceSliderValue.value[1]}`)

  // Pagination
  const page = ref<number>(1)
  const pagesLength = ref<number>(1)
  const resultsLength = ref<number>(1)


  // Async methods 
  const getTourInfos = async () => {
    try {
      const query: QueryParams = {
        sortBy: sortBy.value,
        desc: desc.value,
        priceRange: priceSliderValue.value,
        ageGroups: ageGroups.value,
        dateRange: [fromDate.value.toString(), toDate.value.toString()],
        durations: durations.value,
        specials: specials.value,
        tags: tags.value,
        limit: LIMIT_TOURS_IN_PAGE,
        page: page.value
      }
      tourInfosLoading.value = true
      const data: TourInfo[] = await tourService.getTourInfos(query)
      // on success
      tourInfos.value = data
      tourInfosLoading.value = false
    } catch (e) {
      // on error
      toast.error({ message: 'Couldn\'t get tours' })
    }
  }

  const getTourInfosWithDebounce = debounce(getTourInfos, 300)

  const getTourLength = async () => {
    try {
      const query: TourLengthQueryParams = {
        priceRange: priceSliderValue.value,
        ageGroups: ageGroups.value,
        dateRange: [fromDate.value.toString(), toDate.value.toString()],
        durations: durations.value,
        specials: specials.value,
        tags: tags.value,
      }
      const length: number = await tourService.getTourLength(query)
      // on success
      resultsLength.value = length
      pagesLength.value = Math.floor(length / LIMIT_TOURS_IN_PAGE)
    } catch (e) {
      // on error
      toast.error({ message: 'Couldn\'t get tours' })
    }
  }

  const getFeaturedTours = async () => {
    try {
      const data: TourInfo[] = await tourService.getFeaturedTours()
      // on success
      featuredTours.value = data
    } catch (error) {
      toast.error({ message: 'Couldn\'t get tours' })
    }
  }

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

  return {
    tourInfos,
    getTourInfos,
    getTourInfosWithDebounce,
    tourInfosLoading,
    maxRangeWithDollar,
    featuredTours,
    priceSliderValue,
    minRangeWithDollar,
    getFeaturedTours,
    getTourLength,
    pagesLength,
    tags,
    resultsLength,
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
    destinationCards,
    page
  }
});
