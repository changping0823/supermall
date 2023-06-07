<template>
	<div class="category">
		<h2>分类</h2>
	</div>
</template>

<script>
export default {
	name: "Category",
	components: {},
	created() {
		document.title = "分类";
		console.log("分类页面");
	}
};
</script>

<style>
div {
	background-color: aqua;
}
</style>
