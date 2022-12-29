// export default defineNuxtRouteMiddleware((to, from) => {
//   console.log('middle ware')
//   const publicPages = ['/channelDetail', '/', '/reset-pass', '/auth/login', '/register', '/forget-pass','/new-media'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');
//   // trying to access a restricted page + not logged in
//   // redirect to login pageforget-pass
//   if (authRequired && !loggedIn) {
//     return abortNavigation('/auth/login');
//   } else {
//     return navigateTo('/')
//   }
// })
import { useAuthStore } from "~~/stores/auth.module"
import { useUserInfo } from '@/composables/Services/auth'
export default defineNuxtRouteMiddleware(async (to, from) => {
  const publicPages = ['/', '/reset-pass', '/auth/login', '/auth/register', '/forget-pass', '/new-media'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = useAuthStore().loggedIn
  let token = null
  if (process.client) token = localStorage.getItem('token')
  if (authRequired && !loggedIn) {
    if (token) {
      await useUserInfo()
    } else {
      return navigateTo('/auth/login')
    }
  }
})