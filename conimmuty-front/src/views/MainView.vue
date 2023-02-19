<template>
	<div class="main-view">
		<PostCard v-for="post in posts" :key="post.id" :post="post"></PostCard>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import PostCard from '../components/atoms/PostCard.vue';
import { getAllPosts } from '@/assets/apis/request.js';

const posts = ref([]);

const fetchPosts = async () => {
	const { data } = await getAllPosts();
	console.log(data);
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
