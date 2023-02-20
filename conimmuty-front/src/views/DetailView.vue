<template>
	<div>
		<PostCard :post="post" @like="fetchData" @dislike="fetchData"></PostCard>

		<div class="reply-container">
			<form @submit.prevent="submitNewComment" class="input-group mb-3">
				<input
					v-model="newComment"
					type="text"
					class="form-control"
					placeholder="로새운 글댓을 입하력세요"
				/>
				<button class="btn btn-outline-secondary" type="submit">기쓰</button>
			</form>
			<!-- <Reply></Reply> -->
			<div v-if="comments.length > 0" style="padding: 4px">
				<ReplyItem
					v-for="comment in comments"
					:key="comment.cid"
					:body="comment.body"
					:created-at="comment.createdAt.split('T').join(' ')"
				></ReplyItem>
			</div>
			<div v-else>
				<p style="font-size: 24px; font-weight: light; text-align: center">
					직아 글댓이 습없다니
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import PostCard from '../components/atoms/PostCard.vue';
import ReplyItem from '@/components/atoms/ReplyItem.vue';
import { getPost, getComments, createComment } from '@/assets/apis/request.js';

const route = useRoute();
const id = route.params.id;

// pid에 해당하는 1개의 글, 그리고 글에 딸린 댓글들을 패치하는 로직
const post = ref({});
const comments = ref([]);

const fetchData = async () => {
	const postRes = await getPost(id);
	const commentsRes = await getComments(id);
	post.value = postRes.data;
	comments.value = commentsRes.data;
};
fetchData();

// 새로운 댓글 등록 로직
const newComment = ref('');
const submitNewComment = async () => {
	try {
		const data = {
			pid: id,
			body: newComment.value,
		};
		await createComment(data);
		fetchData();
		newComment.value = '';
	} catch (err) {
		alert('엥 뭔가 잘못된것이와요 : ', err);
	}
};
</script>

<style lang="scss" scoped>
.reply-container {
	margin: 8px;
}

.reply-container > form > input {
	border: 2px solid rgb(219, 226, 239);
}
.reply-container > form > button {
	background-color: rgb(63, 114, 175);
	color: rgb(249, 247, 247);
	transition: 0.2s all;
}
.reply-container > form > button:hover {
	background-color: rgb(249, 247, 247);
	border: 1px solid rgb(63, 114, 175);
	color: rgb(63, 114, 175);
}
</style>
