<script setup lang="ts">

defineProps(['title'])

</script>

<template>
  <div class="grid grid-cols-6 gap-4 mt-5">

    <h1 class="text-primary col-span-6 md:col-span-1">
      {{ title }}
    </h1>
    <div class="col-span-6 md:col-span-5 ">
      <slot  />
    </div>
  </div>
</template>

<style scoped>
</style>
