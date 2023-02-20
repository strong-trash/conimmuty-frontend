<template>
	<div class="post-card">
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<span @click="joa">👍 {{ post.likeCnt }}</span>
		<span @click="sibal">👎 {{ post.dislikeCnt }}</span>
		<span>🗨 {{ post.commentCnt }}</span>
		<span>{{ post.createdAt }}</span>
	</div>
</template>

<script setup>
import { like, dislike } from '@/assets/apis/request.js';

const props = defineProps({
	post: { type: Object },
});
const emits = defineEmits(['like', 'dislike']);

const joa = async () => {
	try {
		const res = await like(props.post.pid);
		emits('like');
		console.log(res);
	} catch (err) {
		alert(err);
	}
};

const sibal = async () => {
	try {
		const res = await dislike(props.post.pid);
		emits('dislike');
		console.log(res);
	} catch (err) {
		alert(err);
	}
};
</script>

<style lang="scss" scoped>
.post-card {
	border: 2px solid rgb(219, 226, 239);
	border-radius: 8px;
	padding: 16px;
	margin: 8px;
}

.post-card > span {
	margin: 4px;
	padding: 4px;
	background-color: rgb(219, 226, 239);
	border-radius: 8px;
	font-size: 12px;
}
</style>
