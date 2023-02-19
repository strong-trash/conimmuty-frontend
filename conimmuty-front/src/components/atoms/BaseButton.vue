<template>
	<div>
		<span>{{ text }}</span>
	</div>
</template>

<script setup>
//const props =
defineProps({
	text: {
		type: String,
		required: true,
	},
});
</script>

<style lang="scss" scoped>
div {
	display: inline-block;
	padding: 8px;
	margin: 4px;
	border-radius: 8px;
	border: 1px solid transparent;
	text-align: center;
	cursor: pointer;
}
span {
	font-size: 14px;
}

.wide {
	padding: 8px 32px;
}

.fill-blue {
	background-color: rgb(63, 114, 175);
	color: rgb(249, 247, 247);
	transition: 0.2s all;
}
.fill-blue:hover {
	background-color: rgb(249, 247, 247);
	border: 1px solid rgb(63, 114, 175);
	color: rgb(63, 114, 175);
}

.fill-navy {
	background-color: rgb(17, 45, 78);
	color: rgb(249, 247, 247);
}
.outline-white {
	border: 1px solid rgb(249, 247, 247);
	color: rgb(249, 247, 247);
	transition: 0.2s all;
}
.outline-white:hover {
	background-color: rgb(249, 247, 247);
	color: rgb(17, 45, 78);
}

.outline-red {
	border: 1px solid rgb(255, 98, 98);
	color: rgb(255, 98, 98);
	transition: 0.2s all;
}
.outline-red:hover {
	background-color: rgb(255, 98, 98);
	color: rgb(249, 247, 247);
}
</style>
