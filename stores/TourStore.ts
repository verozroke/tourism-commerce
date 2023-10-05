import { defineStore } from 'pinia';
import { useToast } from '~/hooks/use-toast';
import tourService from '~/services/tour.service';
import { TourInfo } from '~/types/tour';


export const useTourStore = defineStore('tourStore', () => {
  const tourInfos = ref<TourInfo[]>([
  ])
  const { toast } = useToast()

  const tourInfosLoading = ref<boolean>(false)

  const getTourInfos = async () => {
    try {

      tourInfosLoading.value = true
      const fetchedTourInfos = await tourService.getTourInfos()

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

  return {
    tourInfos,
    setTourInfos,
    getTourInfos,
    tourInfosLoading
  }
});
