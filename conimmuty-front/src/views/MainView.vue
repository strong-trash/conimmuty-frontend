<template>
	<div class="main-view">
		<PostCard
			v-for="post in posts.slice().reverse()"
			:key="post.pid"
			:post="post"
			:mode="'preview'"
			class="postcard-clickable"
			@click="() => $router.push({ name: 'Detail', params: { id: post.pid } })"
			@like="fetchPosts"
			@dislike="fetchPosts"
		></PostCard>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import PostCard from '../components/atoms/PostCard.vue';
import { getAllPosts } from '@/assets/apis/request.js';

const posts = ref([]);

const fetchPosts = async () => {
	const { data } = await getAllPosts();
	posts.value = data;
};
fetchPosts();
</script>

<style lang="scss" scoped>
.main-view {
	width: 60%;
	margin-left: auto;
	margin-right: auto;

	word-wrap: break-word;
}

@media (max-width: 768px) {
	.main-view {
		width: 90%;
	}
}
</style>
