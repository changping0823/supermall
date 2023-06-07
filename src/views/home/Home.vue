<template>
	<div class="home">
		<button @click="count++">+</button>
		<button @click="count--">-</button>
	</div>
</template>

<script>
export default {
	name: "Home",
	components: {},
	data() {
		return {
			count: 0
		};
	},
	methods: {},
	created() {
		document.title = "首页";
	}
};
</script>
