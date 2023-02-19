<template>
	<div>
		<h2>새쓰글기</h2>
		<hr />

		<form @submit.prevent="">
			<label>제목</label>
			<input v-model="title" type="text" class="form-control" />

			<label>내용</label>
			<textarea v-model="content" class="form-control" />

			<BaseButton
				class="outline-red wide"
				text="취소"
				@click="() => $router.go(-1)"
			></BaseButton>
			<BaseButton
				class="fill-blue wide"
				text="쓰기"
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
		const res = await createPost(data);
		console.log(res);
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
