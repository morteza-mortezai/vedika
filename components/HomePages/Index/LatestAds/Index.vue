<script setup lang="ts">
import { useMediaList } from '~~/composables/Services/Media';

import {onMounted} from 'vue'
import MediaCard from './MediaCard.vue';
// const { pending, data } = await useFetch('media', { params: {} })
const data=ref()
const pages=ref(1)
const page=ref(1)
onMounted(async ()=>{
  const res=await useMediaList()
  data.value=res.data.data
  pages.value=res.data.pages
  page.value=res.data.page
})

</script>
<template>
 
  <div class="mt-16 py-16   bg-neutral">
 
    <h2 class=" lg:text-2xl font-bold text-center">
      {{$t('latest_ads')}}
    </h2>
    <p class="text-center text-muted mt-3" v-t="'easy_mood'"></p>
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3  gap-4 mt-10" v-if="-1">
      <MediaCard v-for="(item,i) in data" :key="i" :title="item.title" :locales="item.locations" :cats="item.cats"
        :price="['300 هزار تومان','300 هزار بازدید']" :type="3" :dateTime="item.createdAt" :vip="true" id="123"
        src="/images/a.jpg" logo="3.png" />
    </div>
 
    <!-- pagination -->
    <div class="btn-group">
      <button v-for="item in pages" :key="item" :class="['btn',{'btn-active':item==page}]" >{{item}}</button>
        
    </div>
  </div>
</template>
<style scoped>

</style>

