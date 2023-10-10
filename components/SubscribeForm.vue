<template>
  <div class="flex shadow-2xl w-fit mb-12">
    <div class="relative">
      <svg class="absolute top-[38px] left-5" xmlns="http://www.w3.org/2000/svg" width="23" height="18"
        viewBox="0 0 23 18" fill="none">
        <path d="M2 3L11.4995 11L21 3" stroke="#99A3AD" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
          stroke-linejoin="round" />
        <path
          d="M19.9988 1H3.00124C1.89599 1 1 1.91022 1 3.03304V14.967C1 16.0898 1.89599 17 3.00124 17H19.9988C21.104 17 22 16.0898 22 14.967V3.03304C22 1.91022 21.104 1 19.9988 1Z"
          stroke="#99A3AD" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <input :disabled="isLoading" v-model="emailInput" placeholder="Enter your email" type="text"
        class="py-8 pl-[64px] pr-[64px] text-lg focus:border-seagreen border-2 border-white border-solid focus:outline-none focus:ring-0 transition-all duration-100">
    </div>
    <button @click="() => onSubmit()" :disabled="isLoading" v-ripple
      class="bg-seagreen text-white py-7 px-8 text-2xl tracking-tight text-center">Send Now!</button>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '~/hooks/use-toast';
import emailService from '~/services/email.service';


const emailInput = ref<string>('')
const isLoading = ref<boolean>(false)
const { toast } = useToast()

const isEmail = (email: string): boolean => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

const onSubmit = async () => {
  try {
    if (isEmail(emailInput.value)) {
      isLoading.value = true
      const { message } = await emailService.sendEmail({ email: emailInput.value })
      isLoading.value = false
      emailInput.value = ''
      toast.success({ message })
      return
    }
    toast.error({ message: 'Wrong email' })
  } catch (e) {
    isLoading.value = false
    toast.error({ message: 'Couldn\'t submit your email or email already exists' })
  }
}

</script>

<style scoped></style>