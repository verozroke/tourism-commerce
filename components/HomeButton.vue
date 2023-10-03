<template>
  <v-btn @click="() => router.push('/')" variant="text" color="#1D293F" size="large" style="text-transform: none;"
    prepend-icon="mdi-home">
    Home
  </v-btn>
</template>

<script setup lang="ts">

const router = useRouter()


</script>

<style scoped></style>