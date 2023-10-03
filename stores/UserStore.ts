import { defineStore } from 'pinia';
import authService from '~/services/auth.service';
import { User } from '~/types/user';


export const useUserStore = defineStore('userStore', () => {
  const user = ref<User | null>(null)
  const router = useRouter()

  const setUser = (newUser: User) => {
    user.value = newUser
  }

  const fetchUser = async () => {
    try {
      const fetchedUser = await authService.fetchUser()
      user.value = fetchedUser
    } catch (err) {


    }

  }

  const signOut = async () => {
    try {
      const data = await authService.signOut()
      window.location.reload()
    } catch (err) {
    }
  }


  return {
    user,
    fetchUser,
    setUser,
    signOut
  }
});
