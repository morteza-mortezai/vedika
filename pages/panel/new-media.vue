<script setup lang="ts">
import StepOneVue from "~~/components/PanelPages/AddMedia/StepOne.vue";
definePageMeta({
    layout: "panel",
});
const step = ref(1);
</script>
<template>
    <div>
        <StepOneVue v-if="step == 1" />
    </div>
</template>
