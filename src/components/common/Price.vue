<template>
	<div class="container">
		<img src="~assets/icon_add_line_grey_12@2x.png" alt="" />
		<div class="price-text">{{ price }}</div>
	</div>
</template>

<script>
export default {
	name: "Price",
	props: {
		price: {
			tyep: Number,
			default: 0
		}
	}
};
</script>

<style scoped>
.container {
	display: flex;
	float: left;
	position: relative;
	align-items: flex-end;
	background-color: beige;
}

.container img {
	width: 20px;
	height: 20px;
	text-align: center;
}

.price-text {
	font-size: 30px;
}

.container::after {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 50%;
	border-bottom: 1px solid red; /* 设置删除线样式 */
}
</style>
