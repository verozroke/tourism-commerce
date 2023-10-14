<template>
  <div class="flex flex-col rounded-2xl w-full">
    <div class="flex items-center gap-4 bg-[#FBFBFB] rounded-tl-2xl rounded-tr-2xl py-3 px-4">
      <img :src="review.user.avatarUrl" class="h-14 w-14 rounded-full object-cover object-center"
        :alt="`Avatar of ${review.user.name}`">
      <span class="text-slate-600 leading-normal text-lg flex-grow h-14 flex items-end">{{ review.user.name }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="88" height="17" viewBox="0 0 88 17" fill="none">
        <path
          d="M9.8317 5.49914L7.5 0L5.1683 5.49914L0 6.42461L3.75049 10.7561L2.79256 16.9853L7.5 14.0649L12.2074 16.9853L11.2505 10.7561L15 6.42461L9.8317 5.49914Z"
          fill="#F5A623" />
        <path
          d="M27.8317 5.49914L25.5 0L23.1683 5.49914L18 6.42461L21.7505 10.7561L20.7926 16.9853L25.5 14.0649L30.2074 16.9853L29.2505 10.7561L33 6.42461L27.8317 5.49914Z"
          fill="#F5A623" />
        <path
          d="M46.8317 5.49914L44.5 0L42.1683 5.49914L37 6.42461L40.7505 10.7561L39.7926 16.9853L44.5 14.0649L49.2074 16.9853L48.2495 10.7561L52 6.42461L46.8317 5.49914Z"
          fill="#F5A623" />
        <path
          d="M64.8317 5.49914L62.5 0L60.1683 5.49914L55 6.42461L58.7495 10.7561L57.7926 16.9853L62.5 14.0649L67.2074 16.9853L66.2495 10.7561L70 6.42461L64.8317 5.49914Z"
          fill="#F5A623" />
        <path
          d="M88 6.42461L82.8317 5.49914L80.5 0L78.1683 5.49914L73 6.42461L76.7495 10.7561L75.7926 16.9853L80.5 14.0649L85.2074 16.9853L84.2495 10.7561L88 6.42461Z"
          fill="#F5A623" />
      </svg>
    </div>
    <div class="flex bg-slate-300 h-[1px] rounded-full w-full"></div>
    <div class="flex flex-col bg-white py-14 px-6 shadow-md rounded-bl-2xl rounded-br-2xl">
      <div class="flex justify-between items-center">
        <span class="text-oxford font-medium text-lg leading-5">{{ review.title }}</span>
        <span class="tracking-wide text-slate-600 leading-normal text-base text-right">Reviewed {{
          formatDate(review.createdAt)
        }}</span>
      </div>
      <div class="flex bg-slate-300  h-[1px] mt-4 mb-6 rounded-full w-full"></div>
      <div class="text-base text-oxford tracking-wide leading-normal rounded-bl-2xl rounded-br-2xl">
        {{ review.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Review } from '~/types/tour';
import { User } from '~/types/user';
import { formatDate } from '~/utils/utils'


defineProps<{
  review: Review & { user: User }
}>()

</script>

<style scoped></style>