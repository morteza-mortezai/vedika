<script setup lang="ts">

</script>

<template>
 <!-- nav -->
 <nav class="navbar ">
    <div class="">
      <!-- logo and menus-->
      <div class="navbar-start">
        <!-- <outline-menu-icon class="toggler w-6 h-6 mr-2" @click="show=!show" />
        <nuxt-link class=" normal-case text-2xl md:text-3xl lg:text-4xl mr-10 " :to="{name:'index'}">
          {{$t('vedika')}}
        </nuxt-link> -->
        <!-- pages -->
        <div class="pages">
          <!-- <nuxt-link v-for="(item,i) in items" :key="i" class="nav normal-case mr-6" :to="{name:item.to}">
            {{$t(item.title)}}
          </nuxt-link> -->
          <!-- account -->
          <!-- <nuxt-link class="text-muted normal-case  mr-6" to="{name:item.to}">
            <solid-user-circle-icon class="w-6 h-6  inline " />
            {{$t('user_account')}}
          </nuxt-link> -->
        </div>
      </div>
      <!-- new -->
      <div class="navbar-end inline-flex items-center">
        <select class="select select-sm outline-0" v-model="$i18n.locale">
          <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}
          </option>
        </select>
        <!-- <button class="btn-add btn btn-secondary rounded-full   btn-sm px-5 " @click="addChannel">
          {{$t('add_ads')}}
          <outline-plus-icon class="h-4 w-4 ml-1" />
        </button> -->

        <!-- <router-link to="/login" class="btn btn-ghost btn-sm gap-1" v-if="!loggedIn">
            <LoginIcon class="h-5 w-5 " />
            ورود
          </router-link> -->
        <!-- <router-link :to="{ query: { authAction: 'sign-in' } }" class="btn btn-ghost btn-sm gap-1" v-if="!loggedIn">
          <LoginIcon class="h-5 w-5 " />
          ورود
        </router-link> -->

        <!-- profile menu -->

      </div>
    </div>
  </nav>

</template>

<style scoped lang="scss">
nav {
  @include panel-box;

}
</style>
