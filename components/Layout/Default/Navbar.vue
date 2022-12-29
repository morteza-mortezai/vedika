<script setup lang="ts">
import { computed, watch } from "vue";
import { openModal, closeModal } from "jenesius-vue-modal";

import SignIn from "@/components/Auth/SignIn.vue";
import ForgetPass from "@/components/Auth/ForgetPass.vue";
import ResetPass from "@/components/Auth/ResetPass.vue";
import SignUp from "@/components/Auth/SignUp.vue";

import { useAuthStore } from "@/stores/auth.module";
import { UserCircleIcon, Bars2Icon } from "@heroicons/vue/24/solid";
import { PlusIcon } from "@heroicons/vue/24/outline";
// import { notify } from "@kyvg/vue3-notification";
import { useRoute, useRouter } from "vue-router";

const show = ref(false);
const loggedIn = computed(() => {
	// return useAuthStore().loggedIn
});
const fullName = computed(() => {
	// return useAuthStore().user.fullName
});
const route = useRoute();
const router = useRouter();

// watch(route, (newRoute) => {
//   const authAction = newRoute?.query?.authAction
//   if (authAction == 'sign-in') {
//     openModal(SignIn);
//   }
//   else if (authAction == 'sign-up') {
//     openModal(SignUp);
//   }
//   else if (authAction == 'forget-pass') {
//     openModal(ForgetPass);
//   }
//   else if (authAction == 'reset-pass') {
//     openModal(ResetPass);
//   }
//   else if (authAction == 'close') {
//     closeModal()
//     router.push({ query: {} })
//   }
// })

// function logout() {
//   useAuthStore().logout()
// }
const items = [
	{ title: "main_page", to: "index" },
	{ title: "ads", to: "index" },
	{ title: "categories", to: "index" },
	{ title: "support", to: "index" },
];
</script>

<template>
	<!-- nav -->
	<nav class="navbar">
		<div class="container mx-auto">
			<!-- logo and menus-->
			<div class="navbar-start">
				<Bars2Icon class="toggler w-6 h-6 mr-2" @click="show = !show" />
				<nuxt-link
					class="normal-case text-2xl md:text-3xl lg:text-4xl mr-10"
					:to="{ name: 'index' }"
				>
					{{ $t("vedika") }}
				</nuxt-link>
				<!-- pages -->
				<div class="pages">
					<nuxt-link
						v-for="(item, i) in items"
						:key="i"
						class="nav normal-case mr-6"
						:to="{ name: item.to }"
					>
						{{ $t(item.title) }}
					</nuxt-link>
					<!-- account -->
					<nuxt-link
						class="text-muted normal-case mr-6"
						:to="{ name: 'panel' }"
					>
						<UserCircleIcon class="w-6 h-6 inline" />
						{{ $t("user_account") }}
					</nuxt-link>
				</div>
			</div>
			<!-- new -->
			<div class="navbar-end inline-flex items-center">
				<select class="select select-sm outline-0" v-model="$i18n.locale">
					<option
						v-for="locale in $i18n.availableLocales"
						:key="`locale-${locale}`"
						:value="locale"
					>
						{{ locale }}
					</option>
				</select>
				<nuxt-link
					class="btn-add btn btn-secondary rounded-full btn-sm px-5"
					:to="{ name: 'panel-add-media' }"
				>
					{{ $t("add_ads") }}
					<PlusIcon class="h-4 w-4 ml-1" />
				</nuxt-link>

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
	<!-- sidebar -->
	<nav :class="['sidebar', { active: show }]">
		<!-- logo -->
		<div class="flex items-center justify-between">
			<nuxt-link class="normal-case text-2xl mb-4" :to="{ name: 'index' }">
				{{ $t("vedika") }}
			</nuxt-link>
			<div
				class="cursor-pointer text-error flex items-center"
				@click="show = false"
			>
				<outline-x-icon class="h-4 w-4" />
				<div>{{ $t("close") }}</div>
			</div>
		</div>
		<!-- pages -->
		<div v-for="(item, i) in items" :key="i" class="navcon">
			<nuxt-link class="nav normal-case" :to="{ name: item.to }">
				{{ $t(item.title) }}
			</nuxt-link>
		</div>
		<!-- account -->
		<div class="navcon">
			<nuxt-link class="nav normal-case block" :to="{ name: 'index' }">
				{{ $t("user_account") }}
			</nuxt-link>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
.navbar {
	box-shadow: 0px 10px 25px rgba(4, 0, 28, 0.04);
	@apply bg-white mb-6 border-t-4 border-primary h-20;

	.toggler {
		@apply md:hidden cursor-pointer;
	}

	.navbar-start {
		// line-height: 52px;

		.pages {
			@apply md:flex hidden items-center;
		}

		.nav.router-link-active::before {
			content: "";
			width: 5px;
			height: 5px;
			@apply bg-secondary inline-block mt-1 mr-2 rounded-full;
		}

		@apply flex grow items-center;
	}

	.navbar-end {
		width: auto;

		.btn-add {
			box-shadow: 0px 4px 18px rgba(255, 205, 25, 0.25);
			height: 2.6rem;
		}
	}
}

.sidebar {
	@apply bg-white shadow-lg fixed top-0 bottom-0 px-5 pt-3 z-20 overflow-hidden;
	width: 80%;
	transition: all 0.3s ease-in-out;

	&.active {
		width: 80%;
		box-shadow: 0 0 2px 10000px rgba($color: #000000, $alpha: 0.4);
	}

	.navcon {
		border-color: #f3f4f8;
		@apply border-b;

		.nav.router-link-active {
			bottom: -1px;
			@apply relative inline-block py-2 border-b border-secondary;
		}
	}
}

body[dir="ltr"] .sidebar {
	left: -80%;
}

body[dir="rtl"] .sidebar {
	right: -80%;
}

body[dir="rtl"] .sidebar.active {
	right: 0;
}

body[dir="ltr"] .sidebar.active {
	left: 0;
}
</style>
