<template>
	<div>
		<PostCard :post="post"></PostCard>

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
			<div style="padding: 4px">
				<ReplyItem
					v-for="comment in comments"
					:key="comment.cid"
					:body="comment.body"
					:created-at="comment.createdAt"
				></ReplyItem>
			</div>
		</div>
	</div>
</template>

<script setup>
import PostCard from '../components/atoms/PostCard.vue';
import ReplyItem from '@/components/atoms/ReplyItem.vue';
import { ref, watch } from 'vue';
import { getPost, getComments, createComment } from '@/assets/apis/request.js';

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
});

const newComment = ref('');

const post = ref({});
const comments = ref([]);

const fetchData = async () => {
	const postRes = await getPost(props.id);
	const commentsRes = await getComments(props.id);

	console.log(post);
	console.log(comments);

	post.value = postRes.data;
	comments.value = commentsRes.data;
};
fetchData();

const submitNewComment = async () => {
	try {
		const data = {
			pid: props.id,
			body: newComment.value,
		};
		console.log(data);
		await createComment(data);
		fetchData();
	} catch (err) {
		alert('엥 뭔가 잘못된것이와요 : ', err);
	}
};

watch(props.id, () => fetchData());
</script>

<style lang="scss" scoped>
.reply-container {
	margin: 8px;
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
