<script setup lang="ts">
import Multiselect from '@vueform/multiselect'
// import { PlusIcon } from '@heroicons/vue/outline'
import "@vueform/multiselect/themes/default.css"
import { useCategory } from '~~/composables/Services/Category';
useCategory()
const locations = ref([{
  name: 'tehran', id: 1
}])
const form = ref({
  cat: -1,
  loc: -1,
  key: ''
})
</script>
<template>
  <div class="srch-con">
    <!-- keyword -->
    <input type="text" class="input" :placeholder="$t('enter-keyword')" v-model="form.key">
    <!-- category -->
    <Multiselect class="input" mode="single" trackBy="_id" valueProp="_id" label="name" :searchable="true"
      placeholder="موضوع" v-model="form.cat" :hideSelected="false" :options="cats">
    </Multiselect>
    <!-- location -->
    <Multiselect class="input" mode="single" trackBy="_id" valueProp="_id" label="name" :searchable="true"
      placeholder="موضوع" v-model="form.loc" :hideSelected="false" :options="locations">
    </Multiselect>
    <!-- <div class="srch-con"> -->
    <button class="btn-search ">
    
      <span v-t="'search_ads'" class="md:hidden"></span>
        <outline-search-icon class="w-6 h-6 " />
     
    </button>
    <!-- </div> -->
  </div>
</template>
<style scoped lang="scss">
.srch-con {
  @apply mx-auto w-full lg:w-1/2 rounded-lg md:rounded-full bg-white p-1 grid grid-cols-10 content-center items-center;
  box-shadow: 0px 10px 25px rgba(4, 0, 28, 0.04);
  border: 1.5px solid #F5F5F5;

  .input {
    @apply col-span-10 md:col-span-3 border-0 outline-0 h-8;
  }

  /* .srch-con {
    @apply col-span-10 md:col-span-1; */

  .btn-search {
    @apply col-span-10 md:col-span-1 justify-between md:justify-center btn h-8 btn btn-primary;
    box-shadow: 0px 4px 18px rgba(97, 106, 135, 0.25);

    @media screen and (min-width: 768px) {
      @apply btn-circle ml-auto;
    }
    @media screen and (max-width: 768px) {
      @apply btn-block ;
    }
  }

  /* } */
}
</style>

