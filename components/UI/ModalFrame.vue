<script setup lang="ts">

import ModalHeader from '@/components/UI/ModalHeader.vue'
defineProps(['title', 'classes'])

</script>

<template>
  <div class="shadow overflow-hidden rounded-md bg-white px-4 py-5 cursor-auto sm:p-6"
    :class="classes">

    <ModalHeader :title="title" />

    <!-- main content -->
    <div class="my-3">
      <slot />
    </div>

    <!-- action -->
    <slot name="actions" />

  </div>
</template>

<style scoped>
</style>
