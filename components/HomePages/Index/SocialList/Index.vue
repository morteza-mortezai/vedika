<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import SocialCard from "./SocialCard.vue";

const items = [
  {
    title: 'instagram', color: 'bg-red-100', to: 'index', src: '1', sub: 'insta_desc'
  },
  {
    title: 'telegram', color: 'bg-blue-100', to: 'index', src: '2', sub: 'telegram_desc'
  },
  {
    title: 'soroush', color: 'bg-yellow-100', to: 'index', src: '6', sub: 'soroush_desc'
  },
  {
    title: 'igap', color: 'bg-green-100', to: 'index', src: '4', sub: 'igap_desc'
  },
  {
    title: 'eita', color: 'bg-orange-100', to: 'index', src: '3', sub: 'eita_desc'
  },
  {
    title: 'rubica', color: 'bg-gray-100', to: 'index', src: '5', sub: 'rubica_desc'
  },
]
const settings = {
  itemsToShow: 2,
  snapAlign: 'center',
  wrapAround: true
}
const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 6,
    snapAlign: 'start',
  },
}
const currentSlide = ref(1)
</script>
<template>
  <div class="mt-24 container mx-auto px-2 md:px-0">
    <div class="grid grid-cols-1 md:flex">
      <h2 class=" lg:text-2xl font-bold ">
        {{$t('social_medium')}}
      </h2>
      <div class="flex justify-between md:grow items-center">
        <span v-t="'easy_access'" class="text-muted text-sm font-normal"></span>
        <div>
          <button @click="currentSlide++" class="btn btn-circle btn-sm text-center mr-1">
            <outline-chevron-left-icon class="navicon w-4 h-4 " />
          </button>
          <button @click="currentSlide--" class="btn btn-circle btn-sm text-center">
            <outline-chevron-right-icon class="navicon w-4 h-4 " />
          </button>
        </div>
      </div>
    </div>

    <carousel :settings="settings" :breakpoints="breakpoints" ref="carousel" v-model="currentSlide">
      <slide v-for="(item,i) in items" :key="i" class="pt-5">
        <SocialCard :title="item.title" :color="item.color" :to="item.to" :src="item.src" :sub="item.sub"
          class="mt-6" />
      </slide>
    </carousel>

  </div>

</template>
<style scoped>
body[dir='rtl'] .navicon{
transform: rotate(180deg);
}
</style>

