<template>
  <div class="px-16 ">
    <div class="flex gap-16 items-center">
      <TourGuideCard v-for="(guide, i) in guides" :index="i" :tourGuide='guide' :key="guide.id" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { useToast } from '~/hooks/use-toast';
import tourGuideService from '~/services/tour-guide.service'

const { toast } = useToast()

export type TourGuide = {
  id: string
  fullname: string
  about: string
  journey: string
  facebookLink: string
  instagramLink: string
  twitterLink: string
  imageUrl: string
}

const guides = ref<TourGuide[]>([])

const getTourGuides = async () => {
  try {

    const fetchedGuides: TourGuide[] = await tourGuideService.getTourGuides()

    // on success
    guides.value = fetchedGuides

  } catch (e) {
    // on error

    toast.error({ message: 'Couldn\'t fetch guides ' })
  }
}

onMounted(async () => {
  await getTourGuides()
})

</script>

<style scoped></style>