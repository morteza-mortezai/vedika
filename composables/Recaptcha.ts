// import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3';
// import { useNuxtApp } from '#app';

// export const useVueRecaptcha = async () => {
//   const { vueApp } = useNuxtApp();
//   const config = useRuntimeConfig()
//   console.log('this is compos recaptcha', VueReCaptcha);
//   console.log('this is compos recaptcha',  useReCaptcha());
  
//   vueApp.use(VueReCaptcha, {
//     siteKey: config.public.captchaKey,
//     loaderOptions: {
//       autoHideBadge: true,
//     },
//   });
//   const { executeRecaptcha,recaptchaLoaded } = useReCaptcha();
//   await recaptchaLoaded();
//   return await executeRecaptcha('login');
// };

// import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3';

// export function useVueRecaptcha(pubicKey) {
//   const { vueApp } = useNuxtApp();
//   vueApp.use(VueReCaptcha, {
//     siteKey: pubicKey,
//     loaderOptions: { autoHideBadge: true },
//   });
//   const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();
//   return async (action) => {
//     await recaptchaLoaded();
//     return await executeRecaptcha(action);
//   };
// }