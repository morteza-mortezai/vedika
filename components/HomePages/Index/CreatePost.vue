<script setup lang="ts">
import ModalFrame from '@/components/UI/ModalFrame.vue'
import Swal from "sweetalert2";
import { closeModal } from "jenesius-vue-modal";
import { reactive } from "vue";
import { useLoading } from "vue3-loading-overlay";
import ChannelService from '@/services/channel.service'
import type { ICreateChannel } from "~~/models/media.model";
import { notify } from "@kyvg/vue3-notification";
const item = reactive<ICreateChannel>({
  title: '',
  addr: '',
  desc: "",
});

async function add() {
  let loader = useLoading();
  loader.show();
  try {
    await ChannelService.create(item)
    notify({ type: 'success', text: "تبریک ! کانال شما با موفقیت ثبت شد ." });
    closeModal();
  } catch (err) {
    Swal.fire("خطا!", "خطایی رخ داد دوباره تلاش کنید!", "error");
  }
  loader.hide();
}
</script>

<template>

  <ModalFrame classes="w-10/12 sm:w-8/12 md:w-5/12" title="ثبت رسانه">

    <div class="md:grid md:grid-cols-2 gap-2">
      <!-- title -->
      <div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">عنوان </span>
          </label>
          <input v-model="item.title" type="text" placeholder="Type here"
            class="input input-bordered input-sm w-full" />
        </div>
      </div>
      <!-- addr -->
      <div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">آدرس</span>
            <span class="label-text-alt">Alt label</span>
          </label>
          <input v-model="item.addr" type="text" placeholder="Type here" class="input input-bordered input-sm w-full" />
          <label class="label">
            <span class="label-text-alt">Alt label</span>
            <span class="label-text-alt">Alt label</span>
          </label>
        </div>
      </div>
      <!-- desc -->
      <div class="md:col-span-2">
        <textarea v-model="item.desc" class="textarea textarea-bordered w-full" placeholder="توضیحات"></textarea>
      </div>
    </div>

    <!-- action -->
    <template #actions>
      <button class="btn btn-primary btn-sm btn-block" @click="add">
        ثبت رایگان
      </button>
    </template>

  </ModalFrame>

</template>
 