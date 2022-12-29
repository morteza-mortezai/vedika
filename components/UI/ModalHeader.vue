<script setup lang="ts">
// import { XIcon } from '@heroicons/vue/outline'
// import { closeModal } from "jenesius-vue-modal";
defineProps(['title'])

</script>

<template>
  <div class="flex justify-between">

    <h1 class="font-bold text-lg ">
      {{ title }}
    </h1>

    <router-link :to="{ query: { authAction: 'close' } }">
      <!-- <XIcon class="w-6 text-red-600" /> -->
      close
    </router-link>
  </div>
</template>

<style scoped>

</style>
