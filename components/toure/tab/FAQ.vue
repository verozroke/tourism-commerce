<template>
  <div class="w-full mt-14">
    <div class="flex gap-16">
      <v-icon class="text-gray-400" size="72px">mdi-frequently-asked-questions</v-icon>
      <div class="flex flex-col flex-grow">
        <v-expansion-panels>
          <v-expansion-panel color="#343432" v-for="item in items" :key="item.id">
            <v-expansion-panel-title color="#FBFBFB" style="
              display: flex;
              align-items: center;
              gap: 1em;
            ">
              <v-icon size="32px" class="text-seagreen">mdi-help-circle</v-icon>
              <div style="font-weight: 600; font-size: 18px" class="title text-oxford leading-5">
                {{ item.title }}
              </div>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="text">
              <div class="text-inner">
                {{ item.text }}
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const items = ref([
  {
    id: '1',
    title: 'What type of clothing are suitable for this trek?',
    text: 'Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.',
  },
  {
    id: '2',
    title: 'What type of clothing are suitable for this trek?',
    text: 'Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.',
  },
  {
    id: '3',
    title: 'What type of clothing are suitable for this trek?',
    text: 'Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.',
  },
  {
    id: '4',
    title: 'What type of clothing are suitable for this trek?',
    text: 'Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.',
  },
  {
    id: '5',
    title: 'What type of clothing are suitable for this trek?',
    text: 'Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.',
  },
])

</script>

<style scoped>
.text {
  background-color: #fff;
  color: #1D293F;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.5px;
  font-size: 16px;
}

.text-inner {
  padding: 40px 20px;
  white-space: pre-line;
}
</style>