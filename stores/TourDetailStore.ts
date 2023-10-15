import { defineStore } from 'pinia';
import { useToast } from '~/hooks/use-toast';
import tourService from '~/services/tour.service';
import { useUserStore } from './UserStore';
import type { RegTourStatusType, TourInfo } from '~/types/tour';
import { addToRecentlyViewed } from '~/utils/utils';
import { Like } from '~/types/client';


export type RegisterTourValidator = {
  date: Date
  travelers: string
  transports: string
  status: RegTourStatusType
  tourInfoId: string
  userId: string
}

export type LikeTourValidator = {
  userId: string
  tourInfoId: string
}

export const useTourDetailStore = defineStore('TourDetailStore', () => {
  const { toast } = useToast()
  const userStore = useUserStore()

  const tourInfo = ref<TourInfo>({} as TourInfo)
  const isLiked = ref<boolean>(false)

  // Register Form
  const formDate = ref<string>('')
  const formTravelers = ref<string>('')
  const formTransports = ref<string>('')

  const getTourInfoById = async (id: string) => {
    try {
      const data = await tourService.getTourInfoById(id)
      // on success
      tourInfo.value = data
      if (tourInfo.value.likes?.find(like => like.userId === userStore.user?.id)) {
        isLiked.value = true
      }
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
        status: 'pending',
        userId: userStore.user!.id,
        tourInfoId: tourInfo.value.id,
      }
      await tourService.registerToTour(payload)

      // on success
      toast.success({ message: 'Register completed' })
      formDate.value = ''
      formTravelers.value = ''
      formTransports.value = ''
    } catch (error) {
      toast.error({ message: 'Couldn\'t register you to tour' })
    }
  }

  const likeTour = async () => {
    try {
      isLiked.value = !isLiked.value
      const payload: LikeTourValidator = {
        tourInfoId: tourInfo.value.id,
        userId: userStore.user!.id,
      }
      const message = await tourService.likeTour(payload)

      // on success
      toast.success({ message, timeout: 2000 })
    } catch (error) {
      toast.error({ message: 'Couldn\'t add or remove this tour to your favorites' })
    }
  }

  return {
    formDate,
    formTravelers,
    formTransports,
    registerToTour,
    likeTour,
    tourInfo,
    getTourInfoById,
    isLiked,
  }
});
