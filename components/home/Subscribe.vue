<template>
  <div class="flex py-20 items-center justify-center gap-9 container w-full px-0">
    <div class="grid w-[700px] grid-rows-2 grid-cols-2 gap-x-8 gap-y-8">
      <!-- First image spans 2 rows -->
      <div
        class="col-span-1 row-span-2 bg-[url(https://images.unsplash.com/photo-1520869578617-557561d7b114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)] rounded-lg min-w-full min-h-[300px] bg-cover bg-center" />
      <!-- Second image in the first column -->
      <img
        src="https://images.unsplash.com/photo-1520869578617-557561d7b114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="" class="rounded-lg min-w-full min-h-[300px] object-cover object-center">
      <!-- Third image in the second column -->
      <img
        src="https://images.unsplash.com/photo-1520869578617-557561d7b114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D% min-h-[300px]=format&fit=crop&w=2070&q=80"
        alt="" class="rounded-lg min-w-full min-h-[300px] object-cover object-center">
    </div>
    <div class="flex flex-col flex-grow">
      <h4 class="text-2xl text-seagreen tracking-tight mb-2">Subscribe For Offers</h4>
      <h1 class="text-5xl text-oxford font-semibold tracking-tight leading-normal mb-6">Adventures Calling <br> You Guys!
      </h1>
      <h3 class="text-2xl tracking-tight leading-normal text-slate-500 mb-[72px]">The Brilliant reasons Entrada should be
        your one-stop-shop!</h3>
      <div class="flex shadow-2xl w-fit mb-12">
        <div class="relative">
          <svg class="absolute top-9 left-5" xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18"
            fill="none">
            <path d="M2 3L11.4995 11L21 3" stroke="#99A3AD" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M19.9988 1H3.00124C1.89599 1 1 1.91022 1 3.03304V14.967C1 16.0898 1.89599 17 3.00124 17H19.9988C21.104 17 22 16.0898 22 14.967V3.03304C22 1.91022 21.104 1 19.9988 1Z"
              stroke="#99A3AD" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <input placeholder="Enter your email" type="text"
            class="py-8 pl-[64px] pr-[64px] text-lg focus:border-seagreen border-2 border-white border-solid focus:outline-none focus:ring-0 transition-all duration-100">
        </div>
        <button v-ripple class="bg-seagreen text-white py-7 px-8 text-2xl tracking-tight text-center">Send Now!</button>
      </div>
      <h3 class="text-base tracking-tight leading-normal text-slate-500 mb-[72px]">Expect a reply in 2-3 working days</h3>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>