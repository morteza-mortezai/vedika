<script setup lang="ts">

// import {useFoo} from '@/composable/Login'
// import Swal from "sweetalert2";
import ModalFrame from '@/components/UI/ModalFrame.vue'
// import { useLoading } from "vue3-loading-overlay";
import { closeModal } from "jenesius-vue-modal";
import { useForm, useField } from 'vee-validate';
import { useAuthStore } from '@/stores/auth.module'
import * as yup from 'yup'
// import { LoginIcon } from '@heroicons/vue/outline'
import { notify } from "@kyvg/vue3-notification";
// import { useReCaptcha } from 'vue-recaptcha-v3'
// state
// const { vueApp } = useNuxtApp();
// const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()
// const config = useRuntimeConfig()
// validation
definePageMeta({
  layout: "auth",
});
const schema = yup.object({
  email: yup.string().required().email("لطفا ! ایمیل معتبر وارد کنید ."),
  password: yup.string().required().min(8, "کلمه عبور باید حداقل هشت کاراکتر باشد .")
});
const { errors, handleSubmit } = useForm({
  validationSchema: schema,
});
const { value: email } = useField<string>('email');
const { value: password } = useField<string>('password');
// methods
const login = handleSubmit(async () => {
  // let loader = useLoading();
  // loader.show();

  // Execute reCAPTCHA with action "login".
  // await recaptchaLoaded()
  // const token = await executeRecaptcha('login')
  // const token = await useVueRecaptcha();
  // console.log('token', token);
  console.log('sss')

  try {
    await useAuthStore().login({ email: email.value, password: password.value, token: '1' })

    notify({ type: 'success', text: "تبریک ! شما با موفقیت وارد شدید" });

    setTimeout(
      () => {
        closeModal()
      }
      , 1000)

  } catch (err: any) {
    // Swal.fire("خطا!", err?.response?.data?.errors[0] || 'خطایی رخ داده است', "error");

  }
  // loader.hide();
})
// async function tst() {

  // const recaptchaToken = await recaptcha('login');
  // console.log('recaptchaToken', recaptchaToken)

// }
// onMounted(async () => {
//   console.log('sss')
//   const recaptcha = useVueRecaptcha('asdasdasd');
//   console.log('recaptcha', recaptcha)
// })
</script>
<template>
  <ModalFrame classes="w-10/12 sm:w-8/12 md:w-3/12" title="ورود">
    <!-- email -->
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text">ایمیل</span>

      </label>
      <input name="email" type="text" placeholder=" ایمیل" class="input input-bordered input-sm w-full" />

      <label class="label">
        <span class="label-text-alt text-error">
          <!-- <span>{{ errors.email }}</span> -->
        </span>

      </label>
    </div>
    <!-- pass -->
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text">کلمه عبور </span>
      </label>
      <input name="password" type="password" placeholder="رمز" class="input input-bordered input-sm w-full" />
      <label class="label">
        <span class="label-text-alt text-error">
          <!-- <span>{{ errors.password }}</span> -->
        </span>
        <span class="label-text-alt text-error">
          <router-link :to="{ query: { authAction: 'forget-pass' } }" class="btn btn-sm btn-link">
            فراموشی رمز عبور </router-link>
        </span>
      </label>

    </div>
    <!-- action -->
    <template #actions>
      <button class="btn btn-success btn-sm btn-block gap-2" @click="login">
        <!-- <LoginIcon class="w-5 h-5" /> -->
        ورود222
      </button>
      <div class="d-flex">
        <div>
          <span>هنوز ثبت نام نکرده اید ؟
          </span>

          <router-link :to="{ query: { authAction: 'sign-up' } }" class="btn btn-sm btn-link">
            ثبت نام
          </router-link>
        </div>

      </div>
    </template>
  </ModalFrame>
</template>
  
   