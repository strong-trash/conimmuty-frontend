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
import { ref, onBeforeUnmount, watch } from 'vue';
import { useRouter } from 'vue-router';

import BaseButton from '@/components/atoms/BaseButton.vue';
import { createPost } from '@/assets/apis/request.js';
import { yameStorage } from '@/assets/apis/yameStorage.js';

const props = defineProps({
	title: { type: String, required: false, default: '' },
	content: { type: String, required: false, default: '' },
});

const router = useRouter();

const title = ref(props.title);
const content = ref(props.content);

// 쿼리 안들어오면 input 비우기
watch(props, () => {
	if (!props.title && !props.content) {
		title.value = '';
		content.value = '';
	}
});

// 새로운 글 서버로 제출
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

// 자동저장
const storage = new yameStorage();
const insertNewOldPost = () => {
	if (!title.value && !content.value) {
		return;
	}

	const date = new Date();
	const currentPost = {
		title: title.value,
		content: content.value,
		createdAt: date.toISOString(),
	};

	storage.set([currentPost, ...storage.get()]);
};
const intervalID = setInterval(() => {
	insertNewOldPost();
	console.log('interval', storage.get());
}, 30000);
onBeforeUnmount(() => {
	clearInterval(intervalID);
	insertNewOldPost();
	console.log('unmounted');
});
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
