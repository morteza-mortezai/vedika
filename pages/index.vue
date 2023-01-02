<script setup lang="ts">
import HeroSec from "@/components/HomePages/Index/HeroSec/Index.vue";
import SocialList from "@/components/HomePages/Index/SocialList/Index.vue";
import LatestAds from "~~/components/HomePages/Index/LatestAds/Index.vue";
// import List from "../components/HomePages/Index/List.vue";
// definePageMeta({
//     layout: "auth",
// });
</script>
<template>
    <HeroSec />
    <img src="/images/index/divider.svg" class="mx-auto mt-24" />
    <SocialList />
    <LatestAds />
</template>
