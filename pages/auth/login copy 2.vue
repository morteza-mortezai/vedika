<script setup lang="ts">

// import {useFoo} from '@/composable/Login'
// import Swal from "sweetalert2";
// import { useLoading } from "vue3-loading-overlay";

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
  emailPhone: yup.string().required().email("لطفا ! ایمیل معتبر وارد کنید ."),
  password: yup.string().required().min(8, "کلمه عبور باید حداقل هشت کاراکتر باشد .")
});
const { errors, handleSubmit } = useForm({
  validationSchema: schema,
});
const { value: email } = useField<string>('emailPhone');
const { value: password } = useField<string>('password');
// methods
const login = handleSubmit(async (values) => {
  alert(JSON.stringify(values, null, 2));
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
  <div>
    <form @submit="login">
      <!-- email -->
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">{{ $t('email_phone') }}</span>

        </label>
        <input name="emailPhone" type="text" :placeholder="$t('email_phone')"
          class="input input-bordered input-sm w-full" />

        <label class="label">
          <span class="label-text-alt text-error">
            <!-- <span>{{ errors.email }}</span> -->
          </span>
        </label>
      </div>
      <!-- pass -->
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">{{ $t('password') }} </span>
        </label>
        <input name="password" type="password" class="input input-bordered input-sm w-full" />
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
      <button class="btn btn-secondary btn-sm btn-block gap-2" type="submit">
        {{ $t('login') }}
      </button>
    </form>
    <div class="d-flex">
      <div>
        <span>هنوز ثبت نام نکرده اید ؟
        </span>
        <router-link :to="{ query: { authAction: 'sign-up' } }" class="btn btn-sm btn-link">
          ثبت نام
        </router-link>
      </div>
    </div>
  </div>
</template>
  
   