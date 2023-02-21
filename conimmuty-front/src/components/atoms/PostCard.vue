<template>
	<div class="post-card" :class="{ preview: props.mode === 'preview' }">
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<span class="btn-clickable" @click="joa">👍 {{ post.likeCnt }}</span>
		<span class="btn-clickable" @click="siro">👎 {{ post.dislikeCnt }}</span>
		<span>🗨 {{ post.commentCnt }}</span>
		<span>{{ post.createdAt.split('T').join(' ') }}</span>
	</div>
</template>

<script setup>
import { like, dislike } from '@/assets/apis/request.js';

const props = defineProps({
	post: { type: Object },
	mode: { type: String, default: 'detail' }, // 'preview', 'detail'
});
const emits = defineEmits(['like', 'dislike']);

const joa = async () => {
	// 따봉 (좋아요)
	try {
		await like(props.post.pid);
		emits('like');
	} catch (err) {
		alert(err);
	}
};

const siro = async () => {
	// 안따봉 (싫어요)
	try {
		await dislike(props.post.pid);
		emits('dislike');
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

.preview {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.post-card > span {
	margin: 4px;
	padding: 4px;
	background-color: rgb(219, 226, 239);
	border-radius: 8px;
	font-size: 12px;

	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	transition: 0.2s all;
}

.postcard-clickable {
	cursor: pointer;
	transition: 0.2s all;
}
.postcard-clickable:hover {
	transform: scale(1.1);
	border: 4px solid rgb(63, 114, 175);
}

.btn-clickable {
	cursor: pointer;
}
.btn-clickable:hover {
	background-color: rgb(63, 114, 175);
	color: rgb(219, 226, 239);
}
.btn-clickable:active {
	background-color: rgb(17, 45, 78);
}
</style>
