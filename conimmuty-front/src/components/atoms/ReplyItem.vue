<template>
	<div>
		<p>{{ body }}</p>
		<span>{{ createdAt }}</span>
	</div>
</template>

<script setup>
defineProps({
	body: { type: String },
	createdAt: { type: String },
});
</script>

<style lang="scss" scoped>
p {
	display: inline;
	margin-right: 4px;
}

span {
	color: lightgrey;
}
</style>
