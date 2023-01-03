<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import Multiselect from "@vueform/multiselect";
import { useLocation } from '@/composables/Services/Location'
import { useCategory } from '@/composables/Services/Category'
import { useNewMedia } from "~~/stores/addMedia.module";
import { useRouter } from "vue-router";
const { avl_locs } = useLocation()
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
	MediaAddr: yup
		.string()
		.required("این فیلد اجباری است"),
	cats: yup
		.array()
		.required("این فیلد اجباری است")
});
const { handleSubmit } = useForm({
	validationSchema: schema,
});
const router = useRouter()
// mediaType
const { value: mediaType, errorMessage: MediaTypesErr } =
	useField<number>("mediaType");
// MediaAddr
const { value: MediaAddr, errorMessage: MediaAddrErr } =
	useField<string>("MediaAddr");
// locations
const { value: locations, errorMessage: locationsErr } =
	useField<number[]>("locations");
// cats
const { value: cats, errorMessage: catsErr } =
	useField<number[]>("cats");
// title
const { value: title, errorMessage: titleErr } =
	useField<number>("title");
// save in store
const submit = handleSubmit(async (values) => {
	// save values in store
	useNewMedia().newMedia.mediaType = values.mediaType
	useNewMedia().newMedia.MediaAddr = values.MediaAddr
	useNewMedia().newMedia.locations = values.locations
	useNewMedia().newMedia.cats = values.cats
	useNewMedia().newMedia.title = values.title
	// next step
	router.push({ query: { step: 2 } })
});
const MediaTypes = ref([
	{ name: 'instagram', id: 1 },
	{ name: 'telegram', id: 2 },
])

</script>
<template>
	<h1>{{ $t("add_new_channel") }}</h1>
	<h2>step two</h2>
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
		<!-- MediaAddr -->
		<div class="form-control w-full">
			<label class="label">
				<span class="label-text"> {{ $t("addr") }} </span>
			</label>
			<input name="MediaAddr" v-model="MediaAddr" type="text" class="input input-bordered input-sm w-full" />

			<label class="label">
				<span class="label-text-alt text-error">
					{{ MediaAddrErr }}
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
				v-model="locations" :hideSelected="false" :options="avl_locs">
			</Multiselect>
			<label class="label">
				<span class="label-text-alt text-error">
					{{ locationsErr }}
				</span>
				<span class="label-text-alt text-error">
					{{ $t('not_related_specific_location') }}
				</span>
			</label>
		</div>
		<!--Title -->
		<div class="form-control w-full">
			<label class="label">
				<span class="label-text"> {{ $t("title") }} </span>
			</label>
			<input name="title" v-model.number="title" type="text" class="input input-bordered input-sm w-full" />

			<label class="label">
				<span class="label-text-alt text-error">
					{{ titleErr }}
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
