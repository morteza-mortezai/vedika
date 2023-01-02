<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import Swal from "sweetalert2";
import ModalFrame from '@/components/UI/ModalFrame.vue'
import { useLoading } from "vue3-loading-overlay";
import { useAuthStore } from '@/stores/auth.module'
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup'
import { LoginIcon } from '@heroicons/vue/outline'
import { notify } from "@kyvg/vue3-notification";
import { useReCaptcha } from 'vue-recaptcha-v3'

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()
// validation

const schema = yup.object({
  password: yup.string().required().min(8, "کلمه عبور باید حداقل هشت کاراکتر باشد ."),
  confirm: yup.string().required().oneOf([yup.ref('password'), null], 'کلمات عبور باید یکسان باشند')
});

const { errors, handleSubmit } = useForm({
  validationSchema: schema,
});

const { value: password } = useField<string>('password');
const { value: confirm } = useField<string>('confirm');

// methods

const onSend = handleSubmit(() => {
  submit()
})

const route = useRoute()
const router=useRouter()

async function submit() {
  console.log('route', route)
  const resetToken = route.query.token as string
  if (!resetToken) return

  let loader = useLoading();

  loader.show();

  // Execute reCAPTCHA with action "login".
  await recaptchaLoaded()
  const token = await executeRecaptcha('login')

  try {
    const msg=await useAuthStore().resetPass({ password: password.value, token, resetToken: resetToken })

    notify({ type: 'success', text: msg});
    notify({ type: 'success', text: 'شما با موفقیت وارد شدید'});

    setTimeout(
      () => {
        router.push({name:'Home'})
      }
      , 1000)

  } catch (err: any) {
    Swal.fire("خطا!", err?.response?.data?.errors[0] || 'خطایی رخ داده است', "error");

  }
  loader.hide();
}

</script>

<template>
  <ModalFrame classes="w-10/12 sm:w-8/12 md:w-3/12" title="کلمه عبور جدید">

    <!-- pass -->
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text">کلمه عبور </span>
      </label>
      <input v-model="password" name="password" type="password" placeholder="رمز"
        class="input input-bordered input-sm w-full" />
      <label class="label">
        <span class="label-text-alt text-error">
          <span>{{ errors.password }}</span>
        </span>
      </label>
    </div>

    <!-- confirm -->
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text">تکرار کلمه عبور </span>
      </label>
      <input v-model="confirm" name="confirm" type="password" placeholder="تایید کلمه عبور"
        class="input input-bordered input-sm w-full" />
      <label class="label">
        <span class="label-text-alt text-error">
          <span>{{ errors.confirm }}</span>
        </span>
      </label>
    </div>

    <!-- action -->
    <template #actions>

      <button class="btn btn-success btn-sm btn-block gap-2" @click="onSend">
        <LoginIcon class="w-5 h-5" />
        ذخیره
      </button>

    </template>

  </ModalFrame>
</template>

 