<script setup lang="ts">
const menus = ref([
  // { title: 'home', page: 'home' },
  { title: 'home', page: '/panel/add-media' },
])

</script>

<template>
  <nav>

    <nuxt-link v-for="(item,i) in menus" :key="i" :to="item.page">
      {{item.title}}
    </nuxt-link>

  </nav>
</template>
<style scoped lang="scss">
nav {
  @include panel-box;

}
</style>
