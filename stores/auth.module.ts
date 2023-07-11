import { defineStore } from "pinia";
import { useUserInfo } from '@/composables/Services/Auth'
import type { ILoginUser } from "~~/models/auth.model";
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref('null')
  const loggedIn = computed(() => !!user.value)

  // register(user: ICreateUser) {
  //   return AuthService.create(user).then(
  //     response => {

  //       this.status.loggedIn = true;
  //       console.log('user',response)
  //       this.user=response.user
  //       // this.user.fullName=response.data.fullName
  //       return Promise.resolve(response.message);

  //     },
  //     error => {
  //       this.status.loggedIn = false;
  //       return Promise.reject(error);
  //     }
  //   );
  // },

  // async function login(loginData: ILoginUser) {

  // }
  // async function userInfo() {
  //   try {
  //     const res = await useUserInfo()
  //     user.value = res.data.user
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // resetPass(params: IResetPass) {
  //   return AuthService.resetPass(params).then(
  //     data => {
  //       this.status.loggedIn = true;
  //       this.user = data.user
  //       return Promise.resolve(data.message);
  //     },
  //     error => {
  //       this.status.loggedIn = false;
  //       this.user = null
  //       return Promise.reject(error);
  //     }
  //   );
  // },

  // logout() {
  //   AuthService.logout();
  //   this.status.loggedIn = false;
  //   this.user = null
  // },

  return { user, loggedIn }
})

