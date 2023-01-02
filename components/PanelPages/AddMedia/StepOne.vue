<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import Multiselect from "@vueform/multiselect";
import { useLocation } from '@/composables/Services/Location'
import { useCategory } from '@/composables/Services/Category'
const { locations } = useLocation()
const { categories } = useCategory()
defineEmits(["next"]);
const schema = yup.object({
	mediaType: yup
		.number()
		.required("این فیلد اجباری است")
	,
	title: yup
		.string()
		.required("این فیلد اجباری است")
		.min(5, "عنوان  باید حداقل هشت کاراکتر باشد ."),
});
const { handleSubmit } = useForm({
	validationSchema: schema,
});
// validation
const { value: mediaType, errorMessage: MediaTypesErr } =
	useField<number>("mediaType");
const { value: title, errorMessage: titleErr } =
	useField<string>("title");
const { value: selectedLocations, errorMessage: selectedLocationsErr } =
	useField<number[]>("selectedLocations");
const { value: cats, errorMessage: catsErr } =
	useField<number[]>("cats");
const { value: follower, errorMessage: followerErr } =
	useField<number>("follower");
// save in store
const submit = handleSubmit(async (values) => {
	console.log('v', values)
});
const MediaTypes = ref([
	{ name: 'instagram', id: 1 },
	{ name: 'telegram', id: 2 },
])

</script>
<template>
	<h1>{{ $t("add_new_channel") }}</h1>
	<form @submit.prevent="submit()" class="grid grid-cols-1 md:grid-cols-2 gutter:30">
		<!-- mediaType -->
		<div class="form-control w-full">
			<label class="label">
				<span class="label-text"> {{ $t("social") }} </span>
			</label>
			<Multiselect class="input1" mode="single" trackBy="id" valueProp="id" label="name" :searchable="true"
				v-model.number="mediaType" :hideSelected="false" :options="MediaTypes">
			</Multiselect>
			<label class="label">
				<span class="label-text-alt text-error">
					{{ MediaTypesErr }}
				</span>
			</label>
		</div>
		<!-- Media Title -->
		<div class="form-control w-full">
			<label class="label">
				<span class="label-text"> {{ $t("title") }} </span>
			</label>
			<input name="title" v-model="title" type="text" class="input input-bordered input-sm w-full" />

			<label class="label">
				<span class="label-text-alt text-error">
					{{ titleErr }}
				</span>
			</label>
		</div>
		<!-- category -->
		<div class="form-control w-full">
			<label class="label">
				<span class="label-text"> {{ $t("category") }} </span>
			</label>
			<Multiselect class="input1" mode="multiple" trackBy="_id" valueProp="_id" label="title" :searchable="true"
				v-model="cats" :hideSelected="false" :options="categories">
			</Multiselect>
			<label class="label">
				<span class="label-text-alt text-error">
					{{ catsErr }}
				</span>
			</label>
		</div>
		<!-- locations -->
		<div class="form-control w-full">
			<label class="label">
				<span class="label-text"> {{ $t("location") }} </span>
			</label>
			<Multiselect class="input1" mode="multiple" trackBy="_id" valueProp="_id" label="name" :searchable="true"
				v-model="selectedLocations" :hideSelected="false" :options="locations">
			</Multiselect>
			<label class="label">
				<span class="label-text-alt text-error">
					{{ selectedLocationsErr }}
				</span>
				<span class="label-text-alt text-error">
					{{ $t('not_related_specific_location') }}
				</span>
			</label>
		</div>
		<!-- Followers Count -->
		<div class="form-control w-full">
			<label class="label">
				<span class="label-text"> {{ $t("follower_count") }} </span>
			</label>
			<input name="follower" v-model.number="follower" type="text" class="input input-bordered input-sm w-full" />

			<label class="label">
				<span class="label-text-alt text-error">
					{{ followerErr }}
				</span>
			</label>
		</div>
		<!-- action -->
		<div>
			<button class="btn btn-secondary btn-sm btn-block gap-2" type="submit">
				{{ $t("next") }}
			</button>
		</div>
	</form>
</template>
