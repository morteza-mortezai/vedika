<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
// import { LoginIcon } from '@heroicons/vue/outline'
// import { notify } from "@kyvg/vue3-notification";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { useVerify, useNewCode } from "~~/composables/Services/Auth";
const timer = ref(300);
const interval = ref<any>(null);
const route = useRoute();
const verifySchema = yup.object({
	code: yup.number().required("این فیلد اجباری است"),
});

const { isSubmitting: verifyPending, handleSubmit: handleVerify } = useForm({
	validationSchema: verifySchema,
});

const { value: code, errorMessage: codeErr } = useField<string>("code");
// methods

const verify = handleVerify(async (values) => {
	const emailPhone = route?.query?.emailPhone;
	if (!emailPhone) {
		return alert("mail not found");
	}
	// let loader = useLoading();
	// loader.show();

	// Execute reCAPTCHA with action "login".
	// await recaptchaLoaded()
	// const token = await executeRecaptcha('login')
	// const token = await useVueRecaptcha();
	// console.log('token', token);
	values.token = "dsf";
	values.emailPhone = emailPhone;
	try {
		const res = await useVerify(values as any);
		if (res.data && res.data.token) {
			localStorage.setItem("token", res.data.token);
		}
		// notify({ type: 'success', text: "تبریک ! شما با موفقیت وارد شدید" });
		useRouter().push({ name: "panel-index" });
	} catch (err: any) {
		// Swal.fire("خطا!", err?.response?.data?.errors[0] || 'خطایی رخ داده است', "error");
	}
	// loader.hide();
});
async function newCode() {
	const emailPhone = route?.query?.emailPhone;
	if (!emailPhone) {
		return alert("mail not found");
	}
	try {
		await useNewCode(emailPhone as string);
		timer.value = 300;
	} catch (error) {
		console.log(error);
	}
}
onMounted(() => {
	setInterval(() => {
		timer.value--;
	}, 1000);
});
</script>
<template>
	<div class="text-center">
		<span v-if="timer > 0"> {{ timer }} </span>
		<button v-else class="btn btn-ghost btn-sm" @click="newCode">resend</button>
	</div>
	<form @submit.prevent="verify">
		<!-- code -->
		<div class="form-control w-full">
			<label class="label">
				<span class="label-text"> {{ $t("code") }} </span>
			</label>
			<input
				v-model="code"
				name="code"
				type="text"
				:placeholder="$t('code')"
				class="input input-bordered input-sm w-full"
			/>
			<label class="label">
				<span class="label-text-alt text-error">
					{{ codeErr }}
				</span>
			</label>
		</div>

		<!-- action -->
		<button class="btn btn-secondary btn-sm btn-block gap-2" type="submit">
			{{ $t("login") }}
		</button>
	</form>
</template>