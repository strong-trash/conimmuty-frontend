<template>
	<div>
		<h2>헌기글쓰</h2>
		<hr />

		<div style="text-align: right">
			<BaseButton
				class="fill-blue wide"
				text="든모 헌 글 우지기"
				@click="doubleThanos"
			></BaseButton>
		</div>

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
import { useRouter } from 'vue-router';
import { yameStorage } from '@/assets/apis/yameStorage.js';
import BaseButton from '@/components/atoms/BaseButton.vue';

const router = useRouter();

const storage = new yameStorage();
const oldPosts = ref(storage.get());

const write = post => {
	router.push({ name: 'NewPost', query: { ...post } });
};

const doubleThanos = () => {
	// 모든 헌 글을 지웁니다.
	if (confirm('이거 모든 헌 글 지우기인데 진짜 지우실거에요?') === false) {
		return;
	}

	storage.set([]);
	oldPosts.value = storage.get();
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
