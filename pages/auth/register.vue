<script setup lang="ts">
import RegiterForm from '@/components/PanelPages/Auth/RegisterForm.vue'
import VerifyForm from '@/components/PanelPages/Auth/VerifyForm.vue'
const step = ref(1)
const route = useRoute()
// import { LoginIcon } from '@heroicons/vue/outline'
// import {useFoo} from '@/composable/Login'
// import Swal from "sweetalert2";
// import { useLoading } from "vue3-loading-overlay";
// import { useReCaptcha } from 'vue-recaptcha-v3'
// state
// const { vueApp } = useNuxtApp();
// const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()
// const config = useRuntimeConfig()
// validation
definePageMeta({
  layout: "auth",
});
watch(() => route.query, () => {
  setStep()

})
function setStep() {
  if (route.query?.step == '2') {
    step.value = 2
  }
}
onMounted(() => {
  setStep()
})

</script>
<template>
  <div>

    <!-- signUp -->
    <RegiterForm v-if="step == 1" :key="1" />
    <!-- verify -->
    <VerifyForm v-if="step == 2" :key="2" />

    <div class="d-flex">
      <div>
        <span>هنوز ثبت نام نکرده اید ؟
        </span>
        <router-link :to="{ name: 'auth-login' }" class="btn btn-sm btn-link">
          ثبت نام
        </router-link>
      </div>
    </div>
  </div>
</template>
  
   