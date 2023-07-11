<script setup lang="ts">
// import {useFoo} from '@/composable/Login'
// import Swal from "sweetalert2";
// import { useLoading } from "vue3-loading-overlay";
import { useForm, useField } from 'vee-validate';
// import { useAuthStore } from '@/stores/auth.module'
import * as yup from 'yup'
// import { LoginIcon } from '@heroicons/vue/outline'
// import { notify } from "@kyvg/vue3-notification";
import { ILoginUser } from '~~/models/auth.model';
import { useLogin } from '~~/composables/Services/Auth';
import http from '@/services/helper/http'
// import { VueRecaptcha } from 'vue-recaptcha';
// state

const componentToken = ref('');
// function tst() {
//   try {
//     useUserInfo()
//   } catch (error) {

//   }
// }
// const config = useRuntimeConfig()
// validation
definePageMeta({
  layout: "auth",
});
const schema = yup.object({
  emailPhone: yup.string().required('این فیلد اجباری است').email("لطفا ! ایمیل معتبر وارد کنید ."),
  password: yup.string().required('این فیلد اجباری است').min(8, "کلمه عبور باید حداقل هشت کاراکتر باشد .")
});
const { isSubmitting, handleSubmit: handleLogin } = useForm({
  validationSchema: schema,
});
// useHead({
//   script: [
//     {
//       hid: 'gtm-script1',
//       src: 'https://www.google.com/recaptcha/api.js',
//       defer: true
//     }]
// })
const { value: emailPhone, errorMessage: emailPhoneErr } = useField<string>('emailPhone');
const { value: password, errorMessage: passwordErr } = useField<string>('password');
// methods
const login = handleLogin(async (values) => {
  // let loader = useLoading();
  // loader.show();

  // Execute reCAPTCHA with action "login".
  // const token = await useVueRecaptcha();
  try {
    http.post('/login')
  } catch (error) {
    console.log('err', error)
  }
  return
  console.log('token', componentToken);
  values.token = 'dsf'

  try {
    // await useAuthStore().login(values as ILoginUser)
    const res = await useLogin(values as ILoginUser)
    if (res.data && res.data.token) {
      localStorage.setItem('token', res.data.token)
    }
    useRouter().push({ name: 'panel-add-media' })
    // notify({ type: 'success', text: "تبریک ! شما با موفقیت وارد شدید" });
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
    <!-- <button @click="tst">tst</button> -->
    <!-- <vue-recaptcha @verify="verifyMethod" sitekey="6LfJox8gAAAAADKmSv00wDuAYHZqpvkRmArUzyWv"></vue-recaptcha>
 <button class="g-recaptcha" data-sitekey="6LfJox8gAAAAADKmSv00wDuAYHZqpvkRmArUzyWv" data-callback='onSubmit'
   data-action='submit'>Submit</button> -->
    {{ isSubmitting }}
    <form @submit.prevent="login()">
      <!-- email -->
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">{{ $t('email_phone') }}</span>
        </label>
        <input v-model="emailPhone" name="emailPhone" type="text" :placeholder="$t('email_phone')"
          class="input input-bordered input-sm w-full" />
        <label class="label">
          <span class="label-text-alt text-error">
            {{ emailPhoneErr }}
          </span>
        </label>
      </div>
      <!-- pass -->
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">{{ $t('password') }} </span>
        </label>
        <input name="password" v-model="password" type="password" class="input input-bordered input-sm w-full" />
        <label class="label">
          <span class="label-text-alt text-error">
            {{ passwordErr }}
          </span>
          <span class="label-text-alt text-error">
            <!-- <router-link :to="{ query: { authAction: 'forget-pass' } }" class="btn btn-sm btn-link">
           فراموشی رمز عبور </router-link> -->
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
        <nuxt-link :to="{ name: 'auth-register' }" class="btn btn-sm btn-link">
          ورود
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
  
