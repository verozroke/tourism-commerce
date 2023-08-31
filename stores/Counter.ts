import { defineStore } from 'pinia';


export const useCounterStore = defineStore('Counter', () => {

  const counter = ref<number>(0)


  const increaseCounter = () => {
    counter.value = counter.value + 1
  }
  return {
    counter,
    increaseCounter
  }
});
