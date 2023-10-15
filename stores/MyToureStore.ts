import { defineStore } from 'pinia';
import { useToast } from '~/hooks/use-toast';
import tourService from '~/services/tour.service';
import { TourInfo } from '~/types/tour';
import { useUserStore } from './UserStore';

export const useMyToureStore = defineStore('MyToureStore', () => {
  const { toast } = useToast()
  const userStore = useUserStore()

  const favourites = ref<TourInfo[]>([])
  const pendings = ref<TourInfo[]>([])
  const closeds = ref<TourInfo[]>([])

  const getFavorites = async () => {
    try {
      const data = await tourService.getFavourites(userStore.user!.id)

      // on success
      favourites.value = data
    } catch (error) {
      // on error
      toast.error({ message: 'Could not get favorite toures' })
    }
  }

  const getPendings = async () => {
    try {
      const data = await tourService.getPendings(userStore.user!.id)

      // on success
      favourites.value = data
    } catch (error) {
      // on error
      toast.error({ message: 'Could not get pending toures' })
    }
  }

  const getCloseds = async () => {
    try {
      const data = await tourService.getCloseds(userStore.user!.id)

      // on success
      favourites.value = data
    } catch (error) {
      // on error
      toast.error({ message: 'Could not get closed tours' })
    }
  }

  return {
    favourites,
    pendings,
    closeds,
    getFavorites,
    getPendings,
    getCloseds,
  }
});
