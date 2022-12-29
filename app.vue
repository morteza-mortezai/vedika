<script setup lang="ts">
import { useI18n } from 'vue-i18n'

watch(useI18n().locale, (newLoc, oldLoc) => {
  setAttr(newLoc)
})

onBeforeMount(() => {
  const loc = useI18n().locale.value
  setAttr(loc)
})

function setAttr(newLoc: any) {
  if (newLoc == 'fa') {

    document.querySelector('body').setAttribute('dir', 'rtl')
  } else {
    document.querySelector('body').setAttribute('dir', 'ltr')
  }
}
</script>
<template>
  <NuxtLayout>
    <router-view></router-view>
  </NuxtLayout>
</template>
<style lang="scss">

</style>
