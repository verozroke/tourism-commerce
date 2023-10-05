import { defineStore } from 'pinia';
import { SortByOption, useSort } from '~/hooks/use-sort';
import { useToast } from '~/hooks/use-toast';
import tourService from '~/services/tour.service';
import { TourInfo } from '~/types/tour';




const { sortByMethods } = useSort()


export const useTourStore = defineStore('tourStore', () => {
  const tourInfos = ref<TourInfo[]>([
  ])
  const { toast } = useToast()


  const tourInfosLoading = ref<boolean>(false)

  const getTourInfos = async () => {
    try {
      tourInfosLoading.value = true
      const fetchedTourInfos: TourInfo[] = await tourService.getTourInfos()
      tourInfos.value = fetchedTourInfos
      // on success
      tourInfosLoading.value = false
    } catch (e) {
      // on error
      toast.error({ message: 'Couldn\'t get tours' })
    }
  }

  const setTourInfos = (value: TourInfo[]) => {
    tourInfos.value = value
  }

  // sorting
  const sortBy = ref<SortByOption>('Rating')
  const desc = ref<boolean>(false)
  const changeSorting = () => {
    tourInfos.value = sortByMethods[sortBy.value]({ arr: tourInfos.value, desc: desc.value })
  }




  return {
    tourInfos,
    setTourInfos,
    getTourInfos,
    tourInfosLoading,

    sortBy,
    changeSorting,
    desc
  }
});
