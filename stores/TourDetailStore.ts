import { defineStore } from 'pinia';
import { useToast } from '~/hooks/use-toast';
import tourService from '~/services/tour.service';
import { useUserStore } from './UserStore';
import type { TourInfo } from '~/types/tour';
import { addToRecentlyViewed } from '~/utils/debounce';


export type RegisterTourValidator = {
  date: Date
  travelers: string
  transports: string
  tourInfoId: string
  userId: string
}

export const useTourDetailStore = defineStore('tourDetailStore', () => {
  const { toast } = useToast()
  const userStore = useUserStore()

  const tourInfo = ref<TourInfo>({} as TourInfo)

  // Register Form
  const formDate = ref<string>('')
  const formTravelers = ref<string>('')
  const formTransports = ref<string>('')

  const getTourInfoById = async (id: string) => {
    try {
      const data = await tourService.getTourInfoById(id)
      // on success
      tourInfo.value = data
      addToRecentlyViewed(tourInfo.value)
    } catch (error) {
      // on error
      toast.error({ message: 'Something went wrong' })
    }
  }

  const registerToTour = async () => {
    try {
      const isValidDate = isValidDateFormat(formDate.value)
      if (!isValidDate) {
        toast.error({ message: 'Invalid date format' })
        formDate.value = ''
        return
      }

      const payload: RegisterTourValidator = {
        date: new Date(formDate.value),
        travelers: formTravelers.value,
        transports: formTransports.value,
        userId: userStore.user!.id,
        tourInfoId: tourInfo.value.id,
      }
      const message = await tourService.registerToTour(payload)

      // on success
      toast.success({ message })
      formDate.value = ''
      formTravelers.value = ''
      formTransports.value = ''
    } catch (error) {
      toast.error({ message: 'Couldn\'t register you to tour' })
    }
  }

  return {
    formDate,
    formTravelers,
    formTransports,
    registerToTour,

    tourInfo,
    getTourInfoById,
  }
});
