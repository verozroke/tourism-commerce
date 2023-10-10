import { defineStore } from 'pinia';
import { useToast } from '~/hooks/use-toast';
import authService from '~/services/auth.service';
import { User } from '~/types/user';


export const useUserStore = defineStore('userStore', () => {
  const user = ref<User | null>(null)
  const router = useRouter()
  const { toast } = useToast()

  const setUser = (newUser: User) => {
    user.value = newUser
  }

  const fetchUser = async () => {
    try {
      const fetchedUser: User = await authService.fetchUser()
      user.value = fetchedUser
    } catch (err) {
      // toast.error({ message: 'Couldn\'t fetch user' })

    }

  }

  const signOut = async () => {
    try {
      const data = await authService.signOut()
      window.location.reload()
      toast.error({ message: 'Signed out successfully' })
    } catch (err) {
      toast.error({ message: 'Can not sign out' })
    }
  }


  return {
    user,
    fetchUser,
    setUser,
    signOut
  }
});
