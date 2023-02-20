<template>
	<div class="main-view">
		<PostCard
			v-for="post in posts"
			:key="post.pid"
			:post="post"
			@click="
				() => {
					$router.push({ name: 'Detail', params: { id: post.pid } });
					console.log(post);
				}
			"
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
}
</style>
