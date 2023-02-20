<template>
	<div>
		<h2>헌기글쓰</h2>
		<hr />

		<div v-if="oldPosts.length > 0" class="oldpost-container">
			<div
				class="oldpost-item"
				v-for="(post, index) in oldPosts"
				:key="index"
				@click="write(post)"
			>
				<p class="title">{{ post.title }}</p>
				<p class="created-at">
					{{ post.createdAt.split('.')[0].split('T').join(' ') }}
				</p>
			</div>
		</div>
		<div v-else>
			<p style="font-size: 24px; font-weight: light; text-align: center">
				직아 헌글이 없니습다.
			</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { yameStorage } from '@/assets/apis/yameStorage.js';
import { useRouter } from 'vue-router';

const router = useRouter();

const storage = new yameStorage();
const oldPosts = ref(storage.get());
console.log(oldPosts.value);

const write = post => {
	router.push({ name: 'NewPost', query: { ...post } });
};
</script>

<style lang="scss" scoped>
h2 {
	text-align: center;
	padding: 8px;
}

.oldpost-container {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.oldpost-item {
	text-align: center;
	padding: 8px;
	border: 2px solid transparent;
	border-radius: 8px;
	transition: 0.2s all;
}
.oldpost-item > p {
	margin: 0;
}
.oldpost-item > .title {
	font-size: 16px;
}
.oldpost-item:hover {
	transform: scale(1.2);
	font-weight: 600;
	cursor: pointer;

	border: 2px solid rgb(63, 114, 175);
}

.oldpost-item > .created-at {
	color: grey;
	font-size: 12px;
}
</style>
