import { defineStore } from "pinia";
import { ref, computed } from 'vue'
import { INewMedia } from "~~/models/media.model";
export const useNewMedia = defineStore('newMedia', () => {
  const newMedia = ref<INewMedia>({
    //step 1
    mediaType: 1,
    MediaAddr: '',
    cats: [],
    locations: [],
    title: '',
    img: '',
    desc: '',
    link: '',
    contact: []
  })
  // const loggedIn = computed(() => !!user.value)


  return {
    newMedia
    // , loggedIn
  }
})

