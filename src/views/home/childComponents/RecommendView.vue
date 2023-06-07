<template>
	<div class="home-recommend">
		<div v-for="(item, index) in recommends" :key="index" class="home-recommend-item">
			<a :href="item.link">
				<img :src="item.image" alt="" />
				<div>{{ item.title }}</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "RecommendView",
	props: {
		recommends: {
			type: Array,
			default: []
		}
	}
};
</script>

<style scoped>
.home-recommend {
	display: flex;
	width: 100%;
	text-align: center;
	font-size: 12px;
	padding-top: 10px;
	padding-bottom: 20px;
	border-bottom: 8px solid #eee;
}
.home-recommend-item {
	flex: 1;
}

.home-recommend-item img {
	width: 65px;
	height: 65px;
	margin-bottom: 10px;
}
</style>
