<template>
  <div>
    <div @click="() => router.push('/login')"
      class="text-slate-500 hover:cursor-pointer hover:underline text-base leading-normal">
      Already have an account? Sign in.
    </div>
    <v-form @submit="(e) => onSubmit(e)" class="flex flex-col mt-6 gap-2" ref="registerForm">
      <v-text-field :loading="isLoading" v-model="email" variant="outlined" color="#28B0A6" style="color: #1D293F;"
        :rules="emailRules" label="Email" required></v-text-field>
      <v-text-field :loading="isLoading" v-model="name" variant="outlined" color="#28B0A6" style="color: #1D293F;"
        :rules="nameRules" label="Name" required></v-text-field>
      <v-text-field :loading="isLoading" v-model="password" :counter="20" type="password" style="color: #1D293F;"
        :rules="passwordRules" color="#28B0A6" variant="outlined" label="Password" required></v-text-field>
      <v-btn type="submit" :loading="isLoading" size="large" color="#FA126C" rounded="lg" class="text-white mt-2"
        style="text-transform: none;">
        Sign Up
      </v-btn>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { SubmitEventPromise } from 'vuetify/lib/framework.mjs';
import authService from '~/services/auth.service';

export type RegisterUserValidator = {
  email: string
  name: string
  password: string
}

const isLoading = ref(false)
const router = useRouter()

const registerForm = ref(null)

const isValid = async () => {
  //@ts-expect-error registerForm type gives automaticcaly in vuetify
  const { valid } = await registerForm.value?.validate()

  return valid
}

const resetForm = () => {
  //@ts-expect-error registerForm type gives automaticcaly in vuetify
  registerForm.value?.reset()
}


const onSubmit = async (e: SubmitEventPromise) => {
  e.preventDefault()
  if (await isValid()) {
    try {
      // submit
      const payload: RegisterUserValidator = {
        email: email.value,
        name: name.value,
        password: password.value
      }
      isLoading.value = true
      const { message } = await authService.register(payload)

      // on success

      isLoading.value = false
      resetForm()
      router.push('/login')
      // TODO: snackbar
    } catch (err) {
      // on error
      isLoading.value = false
      // TODO: destructive snackbar
    }

  }


}

const email = ref('')
const emailRules = ref([
  (v: any) => !!v || 'Email is required',
  (v: any) => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
])

const name = ref('')
const nameRules = ref([
  (v: any) => !!v || 'Name is required',
])



const password = ref('')
const passwordRules = ref([
  (v: any) => !!v || 'Password is required',
  (v: any) => (v && v.length >= 8) || 'Password must be more than 8 characters',
  (v: any) => (v && v.length <= 20) || 'Password must be less than 20 characters',
])


</script>

<style scoped></style>