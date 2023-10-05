<template>
  <div>
    <div @click="() => router.push('/register')"
      class="text-slate-500 hover:cursor-pointer hover:underline text-base leading-normal">
      Didn't
      signed up yet? Register.</div>
    <v-form @submit="(e) => onSubmit(e)" class="flex flex-col mt-6 gap-2" ref="loginForm">
      <v-text-field :loading="isLoading" v-model="email" variant="outlined" color="#28B0A6" style="color: #1D293F;"
        :rules="emailRules" label="Email" required></v-text-field>
      <v-text-field :loading="isLoading" v-model="password" :counter="20" type="password" style="color: #1D293F;"
        :rules="passwordRules" color="#28B0A6" variant="outlined" label="Password" required></v-text-field>
      <v-btn type="submit" :loading="isLoading" size="large" color="#FA126C" rounded="lg" class="text-white mt-2"
        style="text-transform: none;">
        Sign In
      </v-btn>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { SubmitEventPromise } from 'vuetify/lib/framework.mjs';
import { useToast } from '~/hooks/use-toast';
import authService from '~/services/auth.service';

export type LoginUserValidator = {
  email: string
  password: string
}

const { toast } = useToast()
const isLoading = ref(false)
const router = useRouter()
const loginForm = ref(null)

const isValid = async () => {
  //@ts-expect-error registerForm type gives automaticcaly in vuetify

  const { valid } = await loginForm.value?.validate()

  return valid
}

const resetForm = () => {
  //@ts-expect-error registerForm type gives automaticcaly in vuetify

  loginForm.value?.reset()
}




const onSubmit = async (e: SubmitEventPromise) => {
  e.preventDefault()
  if (await isValid()) {
    try {
      // submit
      const payload: LoginUserValidator = {
        email: email.value,
        password: password.value
      }
      isLoading.value = true
      const { message } = await authService.login(payload)

      // on success

      toast.success({ message: 'Login successful' })

      isLoading.value = false
      resetForm()
      router.push('/toures')
    } catch (err) {
      // on error
      isLoading.value = false
      toast.error({ message: 'Something went wrong' })
    }

  }


}

const email = ref('')
const emailRules = ref([
  (v: any) => !!v || 'Email is required',
])

const password = ref('')
const passwordRules = ref([
  (v: any) => !!v || 'Password is required',
  (v: any) => (v && v.length >= 8) || 'Password must be more than 8 characters',
  (v: any) => (v && v.length <= 20) || 'Password must be less than 20 characters',
])
</script>

<style scoped></style>