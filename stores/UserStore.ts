import { defineStore } from 'pinia';
import { useToast } from '~/hooks/use-toast';
import authService from '~/services/auth.service';
import type { User } from '~/types/user';


export const useUserStore = defineStore('UserStore', () => {
  const { toast } = useToast()
  const user = ref<User | null>(null)

  const setUser = (newUser: User) => {
    user.value = newUser
  }

  const fetchUser = async () => {
    try {
      const fetchedUser: User = await authService.fetchUser()
      user.value = fetchedUser
    } catch (err) {
      console.log(err)
    }
  }

  const signOut = async () => {
    try {
      await authService.signOut()
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
