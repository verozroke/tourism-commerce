<template>
  <div>
    {{ route.params.userId }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped></style>