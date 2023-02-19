<template>
	<div class="post-card">
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<span class="cnt">👍 {{ post.likeCnt }}</span>
		<span class="cnt">👎 {{ post.dislikeCnt }}</span>
		<span class="cnt">🗨 {{ post.commentCnt }}</span>
		<span class="date">{{ post.createdAt }}</span>
	</div>
</template>

<script setup>
defineProps({
	post: { type: Object },
});
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
