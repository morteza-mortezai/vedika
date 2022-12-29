<script setup lang="ts">
// منطق لاگینو بنویسم
// طاهر هم ناقصی داره
</script>
<template>
   <div class="auth">
      <div class="auth-card">
         <div class="auth-card-logo">
            <h1 class="auth-card-logo-title  ">
               ودیکا

            </h1>
            <img src="/static/images/auth.svg" alt="" srcset="">
            <h2 class="auth-card-logo-sub">
               بهترین ها را به شما معرفی می‌کنیم.
            </h2>
            <p class="auth-card-logo-text">
               ودیکا؛ به شما کمک می‌کند با در نظر گرفتن همه فاکتور های مورد نظرتان، بهترین و به صرفه ترین
               ها را برای ارائه تبلیغات خود پیدا کنید و به نتایج واقعی برسید.
            </p>
         </div>
         <div class="auth-card-form">
            <router-view></router-view>
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
.auth {
   @apply bg-neutral flex justify-center items-center h-screen;

   &-card {
      max-width: 850px;
      width: 100%;
      @apply px-7 py-7 shadow bg-white rounded-lg flex;

      &-logo {
         @apply basis-1/2 rounded-lg text-center;
         background: linear-gradient(180deg, #4E5E88 0%, #1E3259 100%);

         &-title {
            @apply my-4 text-3xl text-white text-opacity-20;
         }

         &-sub {
            @apply my-4 text-sm text-white;
         }

         &-text {
            @apply my-4 text-xs text-white text-opacity-20;
         }
      }

      &-form {
         @apply basis-1/2 ml-7 flex flex-col justify-center;
      }
   }

}
</style>
