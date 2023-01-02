<script setup lang="ts">
import Swal from "sweetalert2";
import ModalFrame from '@/components/UI/ModalFrame.vue'
import { useLoading } from "vue3-loading-overlay";
import { closeModal } from "jenesius-vue-modal";
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup'
import { LoginIcon } from '@heroicons/vue/outline'
import { notify } from "@kyvg/vue3-notification";
import { useReCaptcha } from 'vue-recaptcha-v3'
import authService from '@/services/auth.service'

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()
// validation

const schema = yup.object({
  email: yup.string().required().email("لطفا ! ایمیل معتبر وارد کنید ."),
});

const { errors, handleSubmit } = useForm({
  validationSchema: schema,
});

const { value: email } = useField<string>('email');

// methods

const onSend = handleSubmit(() => {
  submit()
})


async function submit() {

  let loader = useLoading();
  loader.show();

  try {
    // Execute reCAPTCHA with action "login".
    await recaptchaLoaded()
    const token = await executeRecaptcha('login')

    await authService.forgetPass({ email: email.value, token })

    notify({ type: 'success', text: "ایمیل تغییر کلمه عبور با موفقیت ارسال شد ." });

    setTimeout(
      () => {
        closeModal()
      }
      , 1000)

  } catch (err: any) {
    Swal.fire("خطا!", err?.response?.data?.errors[0] || 'خطایی رخ داده است', "error");

  }
  loader.hide();
}

</script>

<template>
  <ModalFrame classes="w-10/12 sm:w-8/12 md:w-3/12" title="فراموشی رمز عبور">
    <!-- fields -->

    <!-- email -->
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text">ایمیل</span>

      </label>
      <input v-model="email" name="email" type="text" placeholder=" ایمیل"
        class="input input-bordered input-sm w-full" />

      <label class="label">
        <span class="label-text-alt text-error">
          <span>{{ errors.email }}</span>
        </span>

      </label>
    </div>

    <!-- action -->
    <template #actions>

      <button class="btn btn-success btn-sm btn-block gap-2" @click="onSend">
        <LoginIcon class="w-5 h-5" />
        ارسال
      </button>

      <div class="d-flex">
        <span>هنوز ثبت نام نکرده اید ؟
        </span>
        <router-link :to="{ query: { authAction: 'sign-up' } }"  class="btn btn-sm btn-link">
          ثبت نام
        </router-link>
        <router-link :to="{ query: { authAction: 'sign-in' } }"  class="btn btn-sm btn-link">
          ورود
        </router-link>
      </div>
    </template>
  </ModalFrame>
</template>

 