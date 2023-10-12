import { defineStore } from 'pinia';
import { useToast } from '~/hooks/use-toast';
import tourService from '~/services/tour.service';
import type {
  TourInfo
} from '~/types/tour';
import { debounce } from '~/utils/debounce';




export const useSearchStore = defineStore('searchStore', () => {
  const { toast } = useToast()

  const dialog = ref(false)
  const searchedTourInfos = ref<TourInfo[]>([])
  const isLoading = ref<boolean>(false)
  const query = ref<string>('')

  const search = debounce(async () => {
    try {
      isLoading.value = true
      if (query.value) {
        const searchResults: TourInfo[] = await tourService.search(query.value)
        isLoading.value = false
        searchedTourInfos.value = searchResults
        return
      }
      searchedTourInfos.value = []
      isLoading.value = false
    } catch (err) {
      // on error
      toast.error({ message: 'Couldn\'t found tour infos' })
    }
  }, 300)

  return {
    dialog,
    searchedTourInfos,
    isLoading,
    search,
    query
  }
});
