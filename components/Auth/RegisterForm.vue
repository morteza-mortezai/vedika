<script setup lang="ts">
// import Swal from "sweetalert2";

// import { useLoading } from "vue3-loading-overlay";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
// import { notify } from "@kyvg/vue3-notification";
import { IRegisterUser } from "~~/models/auth.model";
import { useRegister } from "@/composables/Services/Auth";

const regSchema = yup.object({
	fullName: yup.string().required("این فیلد اجباری است"),
	emailPhone: yup
		.string()
		.required("این فیلد اجباری است")
		.email("لطفا ! ایمیل معتبر وارد کنید ."),
	password: yup
		.string()
		.required("این فیلد اجباری است")
		.min(8, "کلمه عبور باید حداقل هشت کاراکتر باشد ."),
});

const { isSubmitting: regPending, handleSubmit: handleReg } = useForm({
	validationSchema: regSchema,
});
const { value: fullName, errorMessage: fullNameErr } =
	useField<string>("fullName");
const { value: emailPhone, errorMessage: emailPhoneErr } =
	useField<string>("emailPhone");
const { value: password, errorMessage: passwordErr } =
	useField<string>("password");
const register = handleReg(
	async (values) => {
		console.log("reg", values);
		// let loader = useLoading();
		// loader.show();
		// Execute reCAPTCHA with action "login".
		// await recaptchaLoaded()
		// const token = await executeRecaptcha('login')
		// const token = await useVueRecaptcha();
		// console.log('token', token);
		values.token = "dsf";
		try {
			await useRegister(values as IRegisterUser);
			// notify({ type: "success", text: "تبریک ! شما با موفقیت وارد شدید" });
			// step.value = 2
			useRouter().push({ query: { emailPhone: values.emailPhone, step: 2 } });
		} catch (err: any) {
			// Swal.fire("خطا!", err?.response?.data?.errors[0] || 'خطایی رخ داده است', "error");
		}
		// loader.hide();
	},
	({ values, errors, results }) => {
		console.log(values, errors, results);
	}
);
</script>

<template>
	<nuxt-link :to="{ query: { step: 2 } }"> step 2 </nuxt-link>
	<form @submit.prevent="register">
		<!-- fullName -->
		<div class="form-control w-full">
			<label class="label">
				<span class="label-text"> {{ $t("full_name") }} </span>
			</label>
			<input
				v-model="fullName"
				name="fullName"
				type="text"
				:placeholder="$t('full_name')"
				class="input input-bordered input-sm w-full"
			/>
			<label class="label">
				<span class="label-text-alt text-error">
					{{ fullNameErr }}
				</span>
			</label>
		</div>
		<!-- email/phone -->
		<div class="form-control w-full">
			<label class="label">
				<span class="label-text"> {{ $t("email_phone") }} </span>
			</label>
			<input
				v-model="emailPhone"
				name="emailPhone"
				type="text"
				:placeholder="$t('email_phone')"
				class="input input-bordered input-sm w-full"
			/>
			<label class="label">
				<span class="label-text-alt text-error">
					{{ emailPhoneErr }}
				</span>
			</label>
		</div>
		<!-- pass -->
		<div class="form-control w-full">
			<label class="label">
				<span class="label-text"> {{ $t("password") }} </span>
			</label>
			<input
				name="password"
				v-model="password"
				type="password"
				class="input input-bordered input-sm w-full"
			/>
			<label class="label">
				<span class="label-text-alt text-error">
					{{ passwordErr }}
				</span>
				<span class="label-text-alt text-error">
					<router-link
						:to="{ query: { authAction: 'forget-pass' } }"
						class="btn btn-sm btn-link"
					>
						فراموشی رمز عبور
					</router-link>
				</span>
			</label>
		</div>
		<!-- action -->
		<button class="btn btn-secondary btn-sm btn-block gap-2" type="submit">
			{{ $t("next") }}
		</button>
	</form>
</template>

