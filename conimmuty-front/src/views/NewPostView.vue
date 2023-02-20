<template>
	<div>
		<h2>새쓰글기</h2>
		<hr />

		<form @submit.prevent="">
			<label>목제</label>
			<input v-model="title" type="text" class="form-control" />

			<label>용내</label>
			<textarea v-model="content" class="form-control" />

			<BaseButton
				class="outline-red wide"
				text="소취"
				@click="() => $router.go(-1)"
			></BaseButton>
			<BaseButton
				class="fill-blue wide"
				text="기쓰"
				@click="write"
			></BaseButton>
		</form>
	</div>
</template>

<script setup>
import BaseButton from '@/components/atoms/BaseButton.vue';
import { createPost } from '@/assets/apis/request.js';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const title = ref('');
const content = ref('');

const write = async () => {
	try {
		const data = {
			title: title.value,
			content: content.value,
		};
		await createPost(data);
		router.push({ name: 'Main' });
	} catch (err) {
		alert('err');
		console.error(err);
	}
};
</script>

<style lang="scss" scoped>
h2 {
	text-align: center;
	padding: 8px;
}
label {
	font-size: 18px;
	margin-top: 24px;
	margin-bottom: 12px;
}
</style>
