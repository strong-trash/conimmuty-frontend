<template>
	<nav>
		<RouterLink to="/">
			<h1>🤯 코니뮤티</h1>
		</RouterLink>
		<BaseButton
			style="margin-left: auto"
			class="outline-white"
			text="새글쓰기"
			@click="$router.push({ name: 'NewPost' })"
		></BaseButton>
		<BaseButton
			class="outline-white"
			text="헌글쓰기"
			@click="$router.push({ name: 'OldPost' })"
		></BaseButton>
	</nav>
</template>

<script setup>
import BaseButton from '@/components/atoms/BaseButton.vue';
</script>

<style lang="scss" scoped>
a {
	text-decoration: none;
}
nav {
	display: flex;
	align-items: center;
	background-color: rgb(63, 114, 175);
}
h1 {
	margin: 0;
	padding: 8px;
	font-size: 24px;
	color: rgb(249, 247, 247);
}
</style>
