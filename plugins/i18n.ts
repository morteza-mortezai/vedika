import { createI18n } from 'vue-i18n'
import en from '~~/locales/en'
import fa from '~~/locales/fa'
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'fa',
    messages: {
      en,fa
    }
  })
  vueApp.use(i18n)
})