import { defineStore } from 'pinia'
import { useUserStore } from './UserStore'
import { useToast } from '~/hooks/use-toast'
import userService from '~/services/user.service'

export type ChangeAvatarValidator = {
  avatarUrl: string
}

export type ChangeNameValidator = {
  name: string
}

export type ChangeEmailValidator = {
  email: string
}

export type ChangePasswordValidator = {
  oldPassword: string
  newPassword: string
}

export const useSettingStore = defineStore('SettingStore', () => {
  const userStore = useUserStore()
  const { toast } = useToast()
  const tab = ref<string>('')
  const imageUrlInput = ref<string>(userStore.user?.avatarUrl ? userStore.user.avatarUrl : '')
  const nameInput = ref<string>(userStore.user?.name ? userStore.user.name : '')
  const emailInput = ref<string>(userStore.user?.email ? userStore.user.email : '')
  const oldPasswordInput = ref<string>('')
  const newPasswordInput = ref<string>('')
  const newPasswordRepeatInput = ref<string>('')
  const darkMode = ref<boolean>(false)

  const saveImage = async () => {
    try {
      const payload: ChangeAvatarValidator = {
        avatarUrl: imageUrlInput.value
      }

      const message = await userService.changeAvatar(userStore.user!.id, payload)
      // on success
      userStore.user!.avatarUrl = imageUrlInput.value
      toast.success({ message })
    } catch (error) {
      // on error
      toast.error({ message: 'Could not change your avatar' })
    }
  }

  const saveUsername = async () => {
    try {
      const payload: ChangeNameValidator = {
        name: nameInput.value
      }

      const message = await userService.changeName(userStore.user!.id, payload)
      // on success
      userStore.user!.name = nameInput.value
      toast.success({ message })
    } catch (error) {
      // on error
      toast.error({ message: 'Could not change your username' })
    }
  }

  const saveEmail = async () => {
    try {
      const payload: ChangeEmailValidator = {
        email: emailInput.value
      }

      const message = await userService.changeEmail(userStore.user!.id, payload)
      // on success
      userStore.user!.email = emailInput.value
      toast.success({ message })
    } catch (error) {
      // on error
      toast.error({ message: 'Could not change your email' })
    }
  }


  const savePassword = async () => {
    try {
      if (newPasswordRepeatInput.value !== newPasswordInput.value) {
        toast.error({ message: 'Passwords doesn\'t match' })
        return
      }
      const payload: ChangePasswordValidator = {
        oldPassword: oldPasswordInput.value,
        newPassword: newPasswordInput.value
      }
      const message = await userService.changePassword(userStore.user!.id, payload)
      // on success
      toast.success({ message })
    } catch (error) {
      // on error
      toast.error({ message: 'Could not change your password' })
    }
  }

  const setBasicValues = () => {
    imageUrlInput.value = userStore.user!.avatarUrl
    nameInput.value = userStore.user!.name
    emailInput.value = userStore.user!.email
  }

  return {
    tab,
    imageUrlInput,
    saveImage,
    nameInput,
    emailInput,
    setBasicValues,
    saveUsername,
    saveEmail,
    savePassword,
    oldPasswordInput,
    newPasswordInput,
    newPasswordRepeatInput,
    darkMode
  }
})