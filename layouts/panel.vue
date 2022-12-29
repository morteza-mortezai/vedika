<script setup lang="ts">
import Navbar from '@/components/Layout/Panel/Navbar.vue'
import Footer from '@/components/Layout/Panel/Footer.vue'
import SideBar from '@/components/Layout/Panel/SideBar.vue'
</script>
<template >
  <div class="panel">
    <div class="container ">
      <!-- first row -->
      <div class="first-row">
        <!-- col-1 -->
        <SideBar class="sidebar" />
        <!-- col-2 -->
        <div class="col-2">
          <Navbar />
          <router-view class="main"></router-view>
        </div>
      </div>
      <!-- second row -->
      <Footer class="mt-4" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.panel {
  @apply bg-neutral pt-4;
  height: 100vh;

  .container {
    height: calc(100vh - 25px); // inja age ye rahe dge pyda beshe khube
    @apply mx-auto flex flex-col justify-items-stretch;

    .first-row {
      @apply grow flex;

      .sidebar {
        flex-basis: 250px;
      }

      .col-2 {
        @apply pl-4 grow flex flex-col;

        .main {
          @include panel-box;
          @apply mt-4 grow;
        }
      }
    }

  }
}
</style>