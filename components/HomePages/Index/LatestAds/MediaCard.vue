<script setup lang="ts">
import { useConvertTS } from '~~/composables/convertTS'
const p = defineProps<{
  title: string
  locales: { _id: string, name: string }[]
  cats: { _id: string, title: string }[]
  price: string[]
  type: number
  dateTime: string
  vip: boolean
  id: string
  src: string
  logo: string
}>()

</script>
<template>
  <card class="scard">

    <!-- top -->
    <div class="top">
      <!-- avatar -->
      <div>
        <div :class="`icon p-1 w-6 h-6 rounded-full  bg-${type}`">
          <img :src="`/images/logos/white/${logo}`" />
        </div>
        <img :src="src" class="object-cover w-16 h-16 rounded-full" />
      </div>
      <!-- title -->
      <div class=" ml-2 text-xs grow">
        <div class="text-muted">
          {{useConvertTS(dateTime)}}
        </div>
        <!-- title -->
        <h3 class="mt-2 font-bold text-base">
          <nuxt-link :to="{name:'index',params:{id}}">
            {{$t(title)}}
          </nuxt-link>
        </h3>
        <!-- price -->
        <div class=" mt-3">
          <span v-t="'ads_price'" class="text-muted">
          </span>
          500 هزار تومان به ازای 300 هزار بازدید
        </div>
      </div>
      <!-- save -->
      <button class="btn btn-sm btn-circle ">
        <outline-bookmark-icon class="w-4 h-4" />
      </button>
    </div>
    <!-- bot -->
    <div class="bot">

      <div class="flex text-muted items-center ml-2">
        <outline-tag-icon class="w-4 h-4 mr-1" />
        <div class="tag" v-for="(t,i) in cats" :key="i" v-text="t.title"></div>
      </div>
      <div v-if="locales.length>0" class="flex text-muted items-center">
        <outline-location-marker-icon class="w-4 h-4 mr-1" />
        <div v-text="locales[0].name"></div>
      </div>
      <!-- <nuxt-link :to="{name:'index',params:{id}}" class="flex ml-auto items-center">
        <span v-t="'see'"></span>
        <outline-chevron-double-left-icon class="w-4 h-4 mr-1" />
      </nuxt-link> -->

      <!-- action -->
      <!-- <nuxt-link class="btn-show btn   btn-block mt-4" :to="{name:'index',params:{id}}">
    {{$t('show_listing')}}
  </nuxt-link> -->
    </div>
  </card>
</template>
<style scoped lang="scss">
.scard {
  @apply rounded-lg p-3 bg-white;
  border: 1px solid #F5F5F5;
  transition: all 0.1s;

  .top {
    @apply flex items-start justify-between relative;

    .icon {
      @apply absolute -top-0.5;
      // top:-2px;
      left: -2px
    }

    .bg-1 {
      @apply bg-red-500;
    }

    .bg-2 {
      @apply bg-blue-500;
    }

    .bg-3 {
      @apply bg-orange-500;
    }

    .bg-4 {
      @apply bg-green-500;
    }

    .bg-5 {
      @apply bg-gray-500;
    }

    .bg-6 {
      @apply bg-yellow-500;
    }
  }

  .bot {
    @apply flex mt-3 pt-3 border-t text-sm justify-between;

    .tag::after {
      content: ' ، ';
    }

    .tag:last-child::after {
      content: '';
    }


  }

  &:hover {
    box-shadow: 0px 10px 25px rgba(4, 0, 28, 0.04);

    .btn-show {
      background-color: #FFF6D6;
      border-color: #FFF6D6;
      color: #FFCD1A;
    }
  }
}

body[dir='rtl'] {
  .icon {
    right: -2px !important;
  }
}
</style>

