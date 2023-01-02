<script setup lang="ts">
import SearchBox from "./SearchBox.vue";
</script>
<template>
  <div class="grid grid-cols-12 px-2  content-center items-center mt-20">
    <!-- first pic -->
    <div class="hidden md:block col-span-2  ">
      <img src="/images/index/pic-left.svg" class="sideimg w-full" />
    </div>
    <!-- search -->
    <div class="col-span-12  md:col-span-8  text-center p-1 md:p-0">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-bold">
        بهترین ها را به شما معرفی می کنیم
      </h1>
      <h2 class="hidden md:block mt-8">ودیکا به شما کمک می کند با در نظر گرفتن همه ی فاکتورهای مورد نظرتانبه صرفه ترین و
        بهترین راه برای تبلیغات خود
        پیدا کنید و به نتایج واقعی برسید</h2>
      <SearchBox class="mt-7" />
      <p class="mt-6 flex justify-center items-center">
        <SolidFireIcon class="w-6 h-6 inline text-orange-400" />
      <div class="ml-2 text-muted">
        جستجو های محبوب : پوشاک زنانه ، لوازم آرایشی
      </div>
      </p>
    </div>
    <!-- second pic -->
    <div class="hidden md:block col-span-2  ">
      <img src="/images/index/pic-right.svg" class="sideimg w-full" />
    </div>
  </div>
</template>
<style scoped>
body[dir="rtl"] .sideimg {
	transform: scaleX(-1);
}
</style>

