<script setup lang="ts">
import type {IChannel} from '~~/models/media.model'

defineProps<{
  item: IChannel;
}>();

</script>

<template>
  <div class="p-3 ring-2 rounded-lg ring-gray-100 hover:ring-gray-300 bg-white">
    <div class="grid grid-cols-4 gap-2 content-center">
      <figure class="grid grid-cols-1 content-center">
        <div class="avatar">
          <div class="w-24 mask mask-squircle">
            <img src="https://api.lorem.space/image/face?hash=47449" />
          </div>
        </div>
      </figure>
      <div class="col-span-3">
        <h2 class="card-title">
          <router-link :to="{path:'channelDetail',query:{id:item._id}}" >{{item.title}} </router-link>
        </h2>
        <div>
          <div class="badge badge-success bg-green-100">سرگرمی</div>
          <div class="badge badge-warning bg-orange-100">آماده تبادل</div>
        </div>
        <div>
          <div class="">*</div>
          <div class="">1.2 به ازای هر بازدید</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
