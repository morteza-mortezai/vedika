<script setup lang="ts">
defineProps<{
  title: string
  to: string
  src: string
  color: string
  sub: string
}>()
</script>
<template>
  <div class="scard">
    <!-- avatar -->
    <div class="avatar">
      <div :class="['w-16 rounded-full p-4 ' ,color]">
        <img :src="`/static/images/logos/${src}.svg`" width="40px" />
      </div>
    </div>
    <!-- title -->
    <h3 class="font-bold text-lg">
      <nuxt-link :to="{name:to}">
        {{$t(title)}}
      </nuxt-link>
    </h3>
    <!-- sub -->
    <p v-t="sub" class="mt-1"></p>
    <!-- action -->
    <nuxt-link class="btn-show btn   btn-block mt-4" :to="{name:to}">
      {{$t('show_listing')}}
    </nuxt-link>
  </div>
</template>
<style scoped lang="scss">
.scard {
  @apply rounded-lg p-3  ;
  border: 1px solid #F5F5F5;
  transition:all 0.1s ;
  width: 100%;
  margin: 0 5px;
  .avatar {
    // @apply relative;
    // top: -20px;
    margin-top: -25px;
  }

  
  &:hover{
    box-shadow: 0px 10px 25px rgba(4, 0, 28, 0.04);
    .btn-show {
   background-color: #FFF6D6;
   border-color: #FFF6D6;
   color: #FFCD1A;
  }
  }
}
</style>

