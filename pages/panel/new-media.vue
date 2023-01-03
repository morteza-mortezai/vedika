<script setup lang="ts">
import StepOneVue from "~~/components/PanelPages/AddMedia/StepOne.vue";
import StepTwoVue from "~~/components/PanelPages/AddMedia/StepTwo.vue";
import { useRoute } from "vue-router";
const route = useRoute()
definePageMeta({
    layout: "panel",
});
watch(() => route.query.step, (newVal) => {
    if (newVal == '2') step.value = 2
    else step.value = 1
})
const step = ref(1);
</script>
<template>
    <div>
        <StepOneVue v-if="step == 1" />
        <StepTwoVue v-if="step == 2" />
    </div>
</template>
