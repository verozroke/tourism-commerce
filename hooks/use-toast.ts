import { useToastStore } from "~/stores/ToastStore"

export type ToastOptions = {
  message: string,
  timeout?: number
}


export const useToast = () => {

  const toastStore = useToastStore()

  const toast = {
    error({ message, timeout }: ToastOptions) {
      toastStore.openSnackbar(message, timeout, '#FA126C')
    },
    success({ message, timeout }: ToastOptions) {
      toastStore.openSnackbar(message, timeout, '#28B0A6')
    },
    copied({ message, timeout }: ToastOptions) {
      toastStore.openSnackbar(message, timeout, '#3c4dff')
    }
  }

  return { toast }
}