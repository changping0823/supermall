<template>
	<div class="category">
		<h2>分类</h2>

		<price :price="1999999" />
	</div>
</template>

<script>
import Price from "components/common/Price.vue";

export default {
	name: "Category",
	components: {
		Price
	},
	created() {
		document.title = "分类";
		console.log("分类页面");
	}
};
</script>

<style scoped>
div {
	background-color: aqua;
}
</style>
>
